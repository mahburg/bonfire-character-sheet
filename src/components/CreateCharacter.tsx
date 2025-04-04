import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextField,
} from '@mui/material';
import { characterClasses } from '../data/characterClasses';
import { Add, Remove } from '@mui/icons-material';
import { ancestries } from '../data/ancestries';
import { useState } from 'react';
import { getStartingIntegrity } from '../logic/characterLogic';
import { defaultCharacter } from '../data/defaultCharacter';
import { Character } from '../types/character';

const charClassNames = characterClasses.map((charClass) => charClass.name);
const ancestryNames = ancestries.map((ancestry) => ancestry.name);

interface CharTextFieldProps {
  label?: string;
  name: string;
  type?: string;
  defaultValue?: number | string;
  charData?: {
    char: Character;
    setChar: React.Dispatch<React.SetStateAction<Character>>;
  };
  variant?: 'outlined' | 'filled' | 'standard';
  // size?: 'small' | 'medium';
  sx?: object;
}

const CharTextField = ({
  label,
  name,
  type,
  defaultValue,
  charData,
  variant = 'outlined',
  sx,
  ...props
}: CharTextFieldProps) => {
  const { char: character, setChar: setCharacter } = charData || {};
  const value = character?.[name as keyof Character] || defaultValue;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setCharacter) {
      const newValue = e.target.value;
      setCharacter({
        ...character,
        [name as keyof Character]:
          type === 'number' ? Number(newValue) : newValue,
      } as Character);
    }
  };

  const labelValue = label || name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <TextField
      variant={variant}
      label={labelValue}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      sx={sx}
      {...props}
    />
  );
};

export default function CreateCharacter() {
  const [character, setCharacter] = useState(defaultCharacter);

  const [bonusIntegrity, setBonusIntegrity] = useState(5);

  const startingIntegrity = getStartingIntegrity(
    character.presence,
    bonusIntegrity
  );

  const charData = {
    char: character,
    setChar: setCharacter,
  };

  return (
    <CreateCharacterContainer>
      <h1 className="title">Create Character</h1>
      <div className="form-container">
        <CharTextField label="Character Name" name="name" charData={charData} />
        <CharTextField label="Player Name" name="player" charData={charData} />

        <FormControl>
          <InputLabel id="demo-simple-select-label">Ancestry</InputLabel>
          <Select defaultValue={ancestryNames[0]} sx={{ width: '100%' }}>
            {ancestryNames.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="demo-simple-select-label">Class</InputLabel>
          <Select label="Class" defaultValue="Fighter">
            {charClassNames.map((className) => (
              <MenuItem key={className} value={className}>
                {className}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Subclass</InputLabel>
          <Select label="Subclass" defaultValue="Expert">
            {charClassNames.map((className) => (
              <MenuItem key={className} value={className}>
                {className}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <CharTextField
          label="Level"
          name="level"
          charData={charData}
          type="number"
        />
        <div className="stats">
          <CharTextField
            label="Strength"
            name="strength"
            type="number"
            charData={charData}
          />
          <CharTextField name="dexterity" type="number" charData={charData} />
          <CharTextField
            name="constitution"
            type="number"
            charData={charData}
          />
          <CharTextField name="intellect" type="number" charData={charData} />
          <CharTextField name="willpower" type="number" charData={charData} />
          <CharTextField name="presence" type="number" charData={charData} />
        </div>
        <div className="flex aic jcc">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setBonusIntegrity(bonusIntegrity - 1)}
          >
            <Remove />
          </Button>
          <TextField
            label="Bonus Integrity"
            type="number"
            value={bonusIntegrity}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => setBonusIntegrity(bonusIntegrity + 1)}
          >
            <Add />
          </Button>
          <div className="total-integrity">
            Starting integrity: {startingIntegrity}
          </div>
        </div>
      </div>
      <div className="flex">
        <CharTextField name="nerve" type="number" charData={charData} />
        <CharTextField name="vitality" type="number" charData={charData} />
      </div>
    </CreateCharacterContainer>
  );
}

const CreateCharacterContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 20px;
  height: 95vh;
  margin: 2.5vh;
  background-color: #555;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-family: 'Ancient', sans-serif;

  .title {
    color: maroon;
    text-shadow: 1px 1px 3px black;
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 20px;

    .MuiTextField-root {
      width: 100%;
    }
  }
`;
