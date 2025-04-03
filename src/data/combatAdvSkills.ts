import {
  AdvancedMartialSkill,
  ArmorSkill,
  CombatSkillSuite,
  ShieldSkill,
  WeaponSkill,
} from '../types/character';

export const combatSkillSuites: CombatSkillSuite[] = [
  {
    name: 'Armor',
    cost: 40,
    category: 'armor',
  },
  {
    name: 'Melee Weapons',
    cost: 40,
    category: 'melee',
  },
  {
    name: 'Ranged Weapons',
    cost: 40,
    category: 'ranged',
  },
  {
    name: 'Shields',
    cost: 20,
    category: 'shields',
  },
  {
    name: 'Unarmed',
    cost: 20,
    category: 'unarmed',
  },
];

export const meleeWeaponSkills: WeaponSkill[] = [
  {
    name: 'Attack',
    cost: 7,
    rank: 0,
    weaponSubType: null,
    suite: 'melee',
  },
  {
    name: 'Damage',
    cost: 7,
    rank: 0,
    weaponSubType: null,
    suite: 'melee',
  },
  {
    name: 'Parry',
    cost: 7,
    rank: 0,
    weaponSubType: null,
    suite: 'melee',
  },
  {
    name: 'Recovery',
    cost: 7,
    rank: 0,
    weaponSubType: null,
    suite: 'melee',
  },
];

export const rangedWeaponSkills: WeaponSkill[] = [
  {
    name: 'Attack',
    cost: 7,
    rank: 0,
    weaponSubType: null,
    suite: 'ranged',
  },
  {
    name: 'Damage',
    cost: 7,
    rank: 0,
    weaponSubType: null,
    suite: 'ranged',
  },

  {
    name: 'Recovery',
    cost: 7,
    rank: 0,
    weaponSubType: null,
    suite: 'ranged',
  },
];

export const armorSkills: ArmorSkill[] = [
  {
    name: 'Defense',
    cost: 7,
    rank: 0,
    suite: 'armor',
  },
  {
    name: 'Fatigue',
    cost: 7,
    rank: 0,
    suite: 'armor',
  },
  {
    name: 'Initiative',
    cost: 7,
    rank: 0,
    suite: 'armor',
  },
  {
    name: 'Recovery',
    cost: 7,
    rank: 0,
    suite: 'armor',
  },
];

export const shieldSkills: ShieldSkill[] = [
  {
    name: 'Breakage',
    cost: 3,
    rank: 0,
    shieldSubType: null,
    suite: 'shields',
  },
  {
    name: 'Fatigue',
    cost: 7,
    rank: 0,
    shieldSubType: null,
    suite: 'shields',
  },
  {
    name: 'Parry',
    cost: 7,
    rank: 0,
    shieldSubType: null,
    suite: 'shields',
  },
];

export const unarmedSkills: AdvancedMartialSkill[] = [
  {
    name: 'Attack',
    cost: 7,
    rank: 0,
    suite: 'unarmed',
  },
  {
    name: 'Parry',
    cost: 7,
    rank: 0,
    suite: 'unarmed',
  },
  {
    name: 'Effectiveness (Grab)',
    cost: 5,
    rank: 0,
    suite: 'unarmed',
  },
  {
    name: 'Effectiveness (Holds)',
    cost: 5,
    rank: 0,
    suite: 'unarmed',
  },
  {
    name: 'Effectiveness (Push)',
    cost: 5,
    rank: 0,
    suite: 'unarmed',
  },
  {
    name: 'Effectiveness (Strike)',
    cost: 5,
    rank: 0,
    suite: 'unarmed',
  },
  {
    name: 'Effectiveness (Throw/Tackle)',
    cost: 5,
    rank: 0,
    suite: 'unarmed',
  },
];
