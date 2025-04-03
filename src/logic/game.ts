import { Character, SkillSuiteStat, Wound } from '../types/character';
import { GearSize, PersonalContainer } from '../types/gear';
import { initialCapitalize } from '../utils';

export const statToMod = (stat: number): number => {
  return Math.floor((stat - 10) / 2);
};

export const gearSizeToWeight = (size: GearSize): number => {
  switch (size) {
    case 'S':
      return 1;
    case 'M':
      return 3;
    case 'L':
      return 9;
    case 'H':
      return 27;
    case 'G':
      return 81;
    default:
      return 0;
  }
};

export const weightToSize = (weight: number): string => {
  const sizeTally = {
    small: 0,
    medium: 0,
    large: 0,
  };
  while (weight >= 9) {
    weight -= 9;
    sizeTally.large++;
  }
  while (weight >= 3) {
    weight -= 3;
    sizeTally.medium++;
  }
  sizeTally.small = weight;
  const arr: string[] = [];
  if (sizeTally.small) {
    arr.push(`${sizeTally.small} S`);
  }
  if (sizeTally.medium) {
    arr.push(`${sizeTally.medium} M`);
  }
  if (sizeTally.large) {
    arr.push(`${sizeTally.large} L`);
  }

  return arr.join(', ');
};

export const strToWeightCarryCapacity = (str: number): number => {
  switch (str) {
    case 10:
      return 9;
    case 11:
      return 9;
    case 12:
      return 11;
    case 13:
      return 13;
    case 14:
      return 15;
    case 15:
      return 17;
    case 16:
      return 19;
    case 17:
      return 27;
    default:
      return str < 10 ? str : (str - 18) * 3 + 30;
  }
};

export const totalWeight = (character: Character): number => {
  const { inventory } = character;

  return inventory.reduce((acc, item) => {
    if (!item.equipped) return acc;

    return acc + gearSizeToWeight(item.size) * (item.count || 1);
  }, 0);
};

export const totalCarryCapacity = (character: Character): number => {
  if (!character || !character.inventory) {
    return 0;
  }

  const base = strToWeightCarryCapacity(character.strength);

  // equipped container capacity
  const equippedContainers: PersonalContainer[] = character.inventory.filter(
    (item) => item.type === 'container' && item.equipped
  );

  const containerCapacity = equippedContainers.reduce((acc, container) => {
    return acc + (container?.expandedCarry ?? 0);
  }, 0);

  return base + containerCapacity;
};

export const sizeCountToTotalWeight = (
  size: GearSize,
  count: number = 1
): string => {
  const total = gearSizeToWeight(size) * count;

  return weightToSize(total);
};

export const getNerveCategories = (nerve: number) => {
  const quarterRoundedUp = Math.ceil(nerve / 4);
  const quarterRoundedDown = Math.floor(nerve / 4);

  return {
    unsure: [1, quarterRoundedUp],
    tense: [quarterRoundedUp + 1, quarterRoundedDown * 2],
    shaken: [quarterRoundedDown * 2 + 1, quarterRoundedDown * 3],
    broken: [quarterRoundedDown * 3 + 1, nerve],
  };
};

export const getVitalityCategories = (vitality: number) => {
  const quarterRoundedUp = Math.ceil(vitality / 4);
  const quarterRoundedDown = Math.floor(vitality / 4);

  return {
    hurt: [1, quarterRoundedUp],
    bloodied: [quarterRoundedUp + 1, quarterRoundedDown * 2],
    wounded: [quarterRoundedDown * 2 + 1, quarterRoundedDown * 3],
    critical: [quarterRoundedDown * 3 + 1, vitality],
  };
};

export const getTotalDamage = (character: Character): number => {
  return character.wounds.reduce((acc, wound) => acc + wound.damage, 0);
};

const applyDaysToWound = (wound: Wound, days: number): Wound => {
  let daysLeft = days;
  let damage = wound.damage;
  let daysResting = wound.daysResting ?? 0;

  let loopCount = 0;
  while (daysLeft > 0) {
    loopCount++;
    if (loopCount > 100) break;

    // FIXME: should not go negative

    if (daysResting + daysLeft >= damage) {
      daysLeft -= damage - daysResting;
      damage--;
      daysResting = 0;
    } else {
      daysResting += daysLeft;
      daysLeft = 0;
    }
  }

  return {
    ...wound,
    damage: Math.max(0, damage),
    daysResting: Math.max(0, daysResting),
  };
};

export const applyHealingDaysToWounds = (
  character: Character,
  days: number
): Character => {
  const wounds = character.wounds.map((wound) => {
    return applyDaysToWound(wound, days);
  });

  return { ...character, wounds };
};

// export const applyRelaxation = (
//   character: Character,
//   relaxationDelta: number
// ): Character => {
// };

const skillSuites = [
  'athletics',
  'lore',
  'streetwise',
  'strategy',
  'survival',
  'trades',
  'weirdCraft',
];

export const characterSkillSuiteArray = (
  character: Character
): SkillSuiteStat[] => {
  const output: SkillSuiteStat[] = [];

  skillSuites.forEach((skill) => {
    const skillObj: SkillSuiteStat = (character[
      skill as keyof Character
    ] as SkillSuiteStat) || { cost: 0, rank: 0, mod: 0 };

    output.push({
      ...skillObj,
      name: initialCapitalize(skill),
    });
  });

  return output;
};
