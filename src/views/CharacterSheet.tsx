import { SetStateAction, useState } from 'react';

import { Box, styled, Tab, Tabs } from '@mui/material';

import { testCharacter } from '../data/testCharacter';
import { Character } from '../types/character';

import Skills from '../components/Skills';
import GearLoot from '../components/GearLoot';
import CombatSkills from '../components/CombatSkills';
import Characteristics from '../components/Characteristics';
import CharacterHeader from '../components/CharacterHeader';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CharacterSheet() {
  // default character state from local
  const [selectedTab, setSelectedTab] = useState(0);
  const savedCharacter = localStorage.getItem('bonfire-character');
  const defaultCharacter = savedCharacter
    ? JSON.parse(savedCharacter)
    : testCharacter;
  const [character, setCharacterState] = useState<Character>(defaultCharacter);

  const setCharacter = (newCharacter: SetStateAction<Character>) => {
    setCharacterState(newCharacter);

    localStorage.setItem('bonfire-character', JSON.stringify(newCharacter));
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <CharacterSheetContainer>
      <CharacterHeader character={character} setCharacter={setCharacter} />

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          <StyledTab label="Characteristics" {...a11yProps(0)} />
          <StyledTab label="Skills" {...a11yProps(1)} />
          <StyledTab label="Combat" {...a11yProps(2)} />
          <StyledTab label="Gear" {...a11yProps(3)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={selectedTab} index={0}>
        <Characteristics character={character} setCharacter={setCharacter} />
      </CustomTabPanel>

      <CustomTabPanel value={selectedTab} index={1}>
        <Skills character={character} />
      </CustomTabPanel>

      <CustomTabPanel value={selectedTab} index={2}>
        <CombatSkills character={character} />
      </CustomTabPanel>

      <CustomTabPanel value={selectedTab} index={3}>
        <GearLoot character={character} setCharacter={setCharacter} />
      </CustomTabPanel>
    </CharacterSheetContainer>
  );
}

const CharacterSheetContainer = styled('div')`
  font-size: 1.2rem;
  width: 100%;
`;

const StyledTab = styled(Tab)`
  font-family: 'Ancient';
  font-size: 1.3rem;
`;

