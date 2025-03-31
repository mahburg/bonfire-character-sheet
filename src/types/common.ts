import { Character } from './character';

export interface CharacterComponentProps {
  character: Character;
  setCharacter: (character: Character) => void;
}
