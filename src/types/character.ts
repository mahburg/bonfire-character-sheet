import { Inventory } from './gear';

// character classes
export const characterClasses = [
  'Expert',
  'Fighter',
  'Servant',
  'Socialite',
  'Weird-Adept',
];

export interface SkillSuite {
  cost?: number;
  rank: number;
  mod: number;
}

export interface AdvancedSkill extends SkillSuite {
  name: string;
  cost?: number;
  rank: number;
  mod: number;
}

export interface MartialSkill {
  cost?: number;
  rank: number;
}

export interface AdvancedMartialSkill extends MartialSkill {
  name: string;
}

export interface Wound {
  name: string;
  location?: string;
  damage: number;
  originalDamage: number;
  daysResting?: number;
}

export interface Conviction {
  name: string;
  description?: string;
  rank: number;
}

export interface Ally {
  name: string;
  description: string;
}

export interface NameRank {
  name: string;
  rank: number;
}

export interface Character {
  player: string;
  name: string;
  ancestry: string;
  class: string;
  subclass: string;
  level: number;
  crpUnspent: number;
  crpSpent: number;
  integrity: number;
  gritDice: number;

  favorMax: number;
  anointed: boolean;

  nerve: number;
  nerveDie: number;
  nerveMinDie: number;

  stress: number;
  relaxation: number;

  vitality: number;
  vitalityDie: number;
  vitalityMinDie: number;
  traumaThreshold: number;

  wounds: Wound[];

  // stats:
  strength: number;
  dexterity: number;
  constitution: number;
  intellect: number;
  willpower: number;
  presence: number;

  // skills:
  athletics: SkillSuite;
  lore: SkillSuite;
  streetwise: SkillSuite;
  strategy: SkillSuite;
  survival: SkillSuite;
  trades: SkillSuite;
  weirdCraft: SkillSuite;

  // native language

  goals: string[];
  relationships: NameRank[];
  flaws: string[];
  convictions: Conviction[];
  descriptions: NameRank[];
  culturalStrength?: string;
  reputations: string[];

  // money:
  copperCoins: number;
  silverCoins: number;
  goldCoins: number;
  platinumCoins: number;

  // movement: base = crawl, walk = base * 2, jog = base * 4, run = base * 6, sprint = base * 8
  baseMovement: number;

  contactPoints: number;

  allies: Ally[];

  // combat mods:
  attackMod: number;
  defenseMod: number;
  damageMod: number;
  recoveryMod: number;

  // advanced skills:
  advancedSkills: AdvancedSkill[];

  // combat skills:
  armor: MartialSkill;
  meleeWeapons: MartialSkill;
  rangedWeapons: MartialSkill;
  shields: MartialSkill;
  unarmed: MartialSkill;

  combatSkills: AdvancedMartialSkill[];

  inventory: Inventory;

  classAncestralAbilitiesAndTrainings: NameRank[];
  burdensInjuriesAndDrawbacks: NameRank[];
}
