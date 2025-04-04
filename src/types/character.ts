import { Inventory } from './gear';

export interface SkillSuite {
  name: string;
  baseCost?: number;
  stats: string[];
  suite: string;
}

export interface SkillSuiteStat extends SkillSuite {
  rank: number;
  mod?: number;
}
export interface AdvancedSkill {
  name: string;
  baseCost?: number;
  stats: string[];
  suite: string;
}

export interface AdvancedSkillStat extends SkillSuiteStat {
  name: string;
  baseCost?: number;
  stats: string[];
  suite: string;
  rank: number;
  mod: number;
  value?: string;
  description?: string;
}

export interface MartialSkill {
  cost?: number;
  rank: number;
}

type suites = 'armor' | 'melee' | 'ranged' | 'shields' | 'unarmed';

type meleeSubTypes =
  | 'swords'
  | 'axes'
  | 'polearms'
  | 'sidearms'
  | 'trauma'
  | null;
type rangedSubTypes = 'thrown' | 'mechanical' | 'firearms' | null;

export interface CombatSkillSuite {
  name: string;
  cost: number;
  category: suites;
}

export interface AdvancedMartialSkill extends MartialSkill {
  name: string;
  suite: suites | null;
}

type weaponSuites = 'melee' | 'ranged' | null;
export interface WeaponSkill extends AdvancedMartialSkill {
  weaponSubType: meleeSubTypes | rangedSubTypes | null;
  suite: weaponSuites;
}

export interface ArmorSkill extends AdvancedMartialSkill {
  suite: 'armor';
}

export interface ShieldSkill extends AdvancedMartialSkill {
  shieldSubType: 'small' | 'medium' | 'large' | null;
  suite: 'shields';
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
  athletics: SkillSuiteStat;
  lore: SkillSuiteStat;
  streetwise: SkillSuiteStat;
  strategy: SkillSuiteStat;
  survival: SkillSuiteStat;
  trades: SkillSuiteStat;
  weirdCraft: SkillSuiteStat;

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
  advancedSkills: AdvancedSkillStat[];

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
