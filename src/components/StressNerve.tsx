import { Alert, Button, Snackbar, styled } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { rollSingle } from '../logic/dice';
import Section from './Section';
import { useState } from 'react';
import { CharacterComponentProps } from '../types/common';
import { Category } from './StatComps';
import { getNerveCategories } from '../logic/characterLogic';

export default function StressNerve({
  character,
  setCharacter,
}: CharacterComponentProps) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [diceRolled, setDiceRolled] = useState<number[]>([]);

  const { nerve, relaxation, stress } = character;
  const { unsure, tense, shaken, broken } = getNerveCategories(nerve);

  const adjustStress = (delta: number = 1) => {
    const newStress = Math.min(Math.max(0, character.stress + delta), nerve);
    setCharacter({ ...character, stress: newStress });
  };

  const rollStress = () => {
    if (snackbarOpen) {
      setSnackbarOpen(false);
      return;
    }

    const { rolls, total } = rollSingle(4, 1, true);
    adjustStress(total);

    setDiceRolled(rolls);
    setSnackbarOpen(true);
  };

  const adjustRelaxation = (delta: number = 1) => {
    const newRelaxation = Math.min(
      Math.max(0, character.relaxation + delta),
      nerve
    );
    setCharacter({ ...character, relaxation: newRelaxation });
  };

  return (
    <Container>
      <Section title="Stress & Relaxation" primary collapsable>
        <div className="nerve-categories flex">
          <Category name="unsure" value={stress} range={unsure} />
          <Category name="tense" value={stress} range={tense} />
          <Category name="shaken" value={stress} range={shaken} />
          <Category name="broken" value={stress} range={broken} />
        </div>

        <div className="flex">
          <Button variant="contained" onClick={rollStress}>
            Roll 1d4! Stress
          </Button>
          <div className="stress">
            <Button variant="contained" onClick={() => adjustStress(-1)}>
              <RemoveIcon />
            </Button>
            <p>Stress: {stress}</p>
            <Button variant="contained" onClick={() => adjustStress()}>
              <AddIcon />
            </Button>
          </div>
          <div className="relaxation flex">
            <Button variant="contained" onClick={() => adjustRelaxation(-1)}>
              <RemoveIcon />
            </Button>
            <p>Relaxation: {relaxation}</p>
            <Button variant="contained" onClick={() => adjustRelaxation()}>
              <AddIcon />
            </Button>
          </div>
        </div>
      </Section>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={8000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert security="info">
          <span>Total New Stress: {diceRolled.reduce((s, v) => s + v, 0)}</span>
          <br />
          <span>Diced Rolled: {diceRolled.map((v) => `[${v}]`).join(' ')}</span>
        </Alert>
      </Snackbar>
    </Container>
  );
}

const Container = styled('div')`
  display: flex;
  gap: 1rem;
  font-size: 1.3rem;
  width: 100%;

  .nerve-categories {
    justify-content: space-around;
    padding: 0.25rem;
  }

  .stress {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .relaxation {
    padding: 0.5rem;
  }
`;
