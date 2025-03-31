type damageType = 'crushing' | 'piercing' | 'slashing';

export interface Weapon {
  name: string;
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

  size: string;
  measure: number;
  type: string;
  bonus: string;
  traits: string[];
  wear: number;
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
