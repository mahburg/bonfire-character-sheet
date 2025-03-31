import { GearSize } from './gear';

export interface Armor {
  name: string;
  damageReduction: string;
  defenseMod: number;
  initiativeMod: number;
  recoveryMod: number;
  fatigue: number;
  skillAdjust: number;
  size: GearSize;
}
