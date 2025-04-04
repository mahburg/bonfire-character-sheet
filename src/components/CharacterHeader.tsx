import { Button, Menu, MenuItem, Modal, styled } from '@mui/material';

import { CharacterComponentProps } from '../types/common';

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { testCharacter } from '../data/testCharacter';
import CreateCharacter from './CreateCharacter';

export default function CharacterHeader({
  character,
  setCharacter,
}: CharacterComponentProps) {
  const [createModalOpen, setCreateModalOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <CharacterHeaderContainer className="flex">
      <div className="flex">
        <h2>{character.name}</h2>
        <h4>(Player: {character.player})</h4>
        <h3>
          <span>Ancestry: {character.ancestry}</span>
        </h3>
        <h3>
          Class/Subclass: {character.class} / {character.subclass}
        </h3>
        <h3>Level: {character.level}</h3>
      </div>
      <div className="right flex">
        <img className="logo" src="/images/bonfire-logo.png" alt="Logo" />

        <Button onClick={handleClick}>
          <MenuIcon fontSize="large" sx={{ fill: 'white' }} />
        </Button>
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            setCreateModalOpen(true);
            handleClose();
          }}
        >
          Create New Character
        </MenuItem>
        <MenuItem
          onClick={() => {
            setCharacter(testCharacter);
            localStorage.removeItem('bonfire-character');
          }}
        >
          Reset Character Data
        </MenuItem>
      </Menu>
      <Modal open={createModalOpen} onClose={() => setCreateModalOpen(false)}>
        <CreateCharacter />
      </Modal>
    </CharacterHeaderContainer>
  );
}

const CharacterHeaderContainer = styled('header')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background-color: maroon;
  color: white;
  text-shadow: 1px 1px 1px black;
  font-size: 1.3rem;
  width: 100%;

  .logo {
    height: 45px;
  }
`;
