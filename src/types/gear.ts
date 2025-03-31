// character can wear 1 backpack 3 pouches and 3 of any other container (sheathe, coin purse, quiver, etc)
export type GearSize = null | 'D' | 'T' | 'S' | 'M' | 'L' | 'H' | 'G';

export const gearCategories: string[] = [
  'tools',
  'weapons',
  'shields',
  'musical instruments',
  'poisons & toxins',
  'clothing',
  'containers',
  'armor',
  'animals',
];

export type GearType =
  | 'armor'
  | 'weapon'
  | 'tool'
  | 'consumable'
  | 'container'
  | 'item'
  | 'other';

export interface GearBase {
  name: string;
  size: GearSize;
  complex?: number;
  cost?: number;
  source?: number;
  local?: number;
  nearby?: number;
  regional?: number;
  distant?: number;
  category: string;
  subCategory?: string | null;
}

export interface Gear extends GearBase {
  description?: string;
  count?: number;
  equipped?: boolean;
  type?: GearType;
  wear?: number;
}

export interface PersonalContainer extends Gear {
  expandedCarry?: number;
}

type damageType = 'crushing' | 'piercing' | 'slashing';

export interface Weapon extends Gear {
  damage: string;
  damageType: damageType;
  recovery: number;
  initiative: number;
  defense: number;
  flanks: number;
  parry: number;
  cover: number;
  parryDamageReduction: number;
  damageReduction: number;

  measure: number;
  bonus?: string;
  traits: string[];
}

interface RangeSet {
  min: number;
  max: number;
}

// ranges are in feet with penalties for range
// each weapon has a penalty of 0, -2, -4, -8, -16, -32

export interface RangedWeapon extends Weapon {
  minimumRecovery: number;
  ranges: RangeSet[];
  ammo: number;
}

export type Inventory = (Gear | PersonalContainer | Weapon | RangedWeapon)[];
