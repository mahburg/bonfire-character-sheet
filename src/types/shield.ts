import { GearSize } from './gear';

export interface Shield {
  name: string;
  size: GearSize;
  damageReduction: string;
  defense: number;
  parry: number;
  cover: string;
  flanks: number;
  fatigue: number;
  bonus: boolean;
}
