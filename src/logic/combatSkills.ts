// Armor	40	*
// Defense	7	*
// Fatigue	7	*
// Initiative	7	*
// Recovery	7	*

import { Weapon } from '../types/gear';
import {
  DiceData,
  diceDataToString,
  parseDiceString,
  sumDiceCountsAndMods,
} from './dice';

const diceSizes = [2, 3, 4, 6, 8, 10, 12, 20];

const upCyclingDice = (
  cycles: number,
  startingSides: number,
  maxSides: number
) => {
  const diceCounts: Record<string, DiceData> = {};
  const indexOfStartingSides = diceSizes.indexOf(startingSides);
  const indexOfMaxSides = diceSizes.indexOf(maxSides);
  const diceArray = diceSizes.slice(indexOfStartingSides, indexOfMaxSides + 1);

  let sidesIndex = -1;
  let sides = startingSides;
  let maxDieCount = 0;

  for (let i = 0; i < cycles; i++) {
    sidesIndex++;
    sides = diceArray[sidesIndex];

    if (sides === maxSides) {
      sidesIndex = -1;
      maxDieCount++;
      continue;
    }
  }

  if (sides > 0) {
    diceCounts[`d${sides}!`] = { count: 1, sides, explode: true };
  }

  if (maxDieCount) {
    diceCounts[`d${maxSides}`] = {
      count: maxDieCount,
      sides: maxSides,
      explode: true,
    };
  }

  return diceCounts;
};

// Melee Weapons	40	*
// Attack (Weapon Cat.)	7	*
// Damage (Weapon Cat.)	7	*

export const damageBoostFromSkill = (weapon: Weapon, rank: number) => {
  if (rank < 1) return weapon.damage;

  const damage = weapon.damage;
  const damageType = weapon.damageType;

  const { diceCounts, mod } = parseDiceString(damage);

  const upgradeCount = Math.ceil(rank / 2);

  switch (damageType) {
    case 'crushing':
      return diceDataToString(diceCounts, mod + upgradeCount);

    case 'piercing': {
      const diceBonus = upCyclingDice(upgradeCount, 3, 8);
      const totalDice = sumDiceCountsAndMods([
        { diceCounts: diceBonus },
        { diceCounts, mod },
      ]);

      console.log(weapon.name);
      console.log(totalDice);

      return diceDataToString(totalDice.diceCounts, totalDice.mod);
    }
    case 'slashing': {
      const diceBonus = upCyclingDice(upgradeCount, 3, 4);
      const totalDice = sumDiceCountsAndMods([
        { diceCounts: diceBonus },
        { diceCounts, mod },
      ]);

      return diceDataToString(totalDice.diceCounts, totalDice.mod);
    }
    default:
      return weapon.damage;
  }
};

// Parry (Weapon Cat.)	7	*
// Recovery (Weapon Cat.)	7	*

// Ranged Weapons	40	*
// Attack (Weapon Cat.)	7	*
// Damage (Weapon Cat.)	7	*
// Recovery (Weapon Cat.)	7	*

// Shields	40	*
// Breakage (Shield Cat.)	3	*
// Fatigue (Shield Cat.)	7	*
// Parry (Shield Cat.)	7	*

// Unarmed	40	*
// Attack	7	*
// Parry	7	*
// Effectiveness (Grab)	5	*
// Effectiveness (Holds)	5	*
// Effectiveness (Push)	5	*
// Effectiveness (Strike)	5	*
// Effectiveness (Throw/Tackle)	5	*
