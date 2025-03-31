import { useState } from 'react';
import {
  applyHealingDaysToWounds,
  getTotalDamage,
  getVitalityCategories,
} from '../logic/game';
import { CharacterComponentProps } from '../types/common';
import Section from './Section';
import { Category, WoundItem } from './StatComps';
import { Button, styled } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

export default function Vitality({
  character,
  setCharacter,
}: CharacterComponentProps) {
  const { vitality } = character;
  const { hurt, bloodied, wounded, critical } = getVitalityCategories(vitality);
  const totalDamage = getTotalDamage(character);
  const [daysToRest, setDaysToRest] = useState(0);

  const applyRest = () => {
    setCharacter(applyHealingDaysToWounds(character, daysToRest));
    setDaysToRest(0);
  };

  return (
    <Wrapper>
      <Section
        title="Vitality"
        primary
        titleRight={
          <div>
            Total Damage: <span>{totalDamage}</span>
          </div>
        }
        collapsable
      >
        <div className="vitality">
          <div className="vitality-categories flex">
            <Category name="hurt" value={totalDamage} range={hurt} />
            <Category name="bloodied" value={totalDamage} range={bloodied} />
            <Category name="wounded" value={totalDamage} range={wounded} />
            <Category name="critical" value={totalDamage} range={critical} />
            {/* <p>
              Hurt: {hurt[0]} - {hurt[1]}
            </p>
            <p>
              Bloodied: {bloodied[0]} - {bloodied[1]}
            </p>
            <p>
              Wounded: {wounded[0]} - {wounded[1]}
            </p>
            <p>
              Critical: {critical[0]} - {critical[1]}
            </p> */}
            <p>Trauma Threshold: {Math.ceil(vitality / 4)}</p>
          </div>
        </div>
        <div className="wounds">
          <Section title="Wounds">
            <div className="wounds-list">
              {character.wounds.map((wound, index) => (
                <WoundItem wound={wound} key={index} />
              ))}
            </div>
          </Section>
        </div>

        <div className="resting-days flex">
          <Button variant="outlined">Add Wound</Button>
          <br />
          <Button
            variant="contained"
            onClick={() => setDaysToRest(Math.max(0, daysToRest - 1))}
          >
            <Remove />
          </Button>
          <p>Days Resting: {daysToRest}</p>
          <Button
            variant="contained"
            onClick={() => setDaysToRest(daysToRest + 1)}
          >
            <Add />
          </Button>
          <Button variant="contained" onClick={applyRest}>
            Apply Rest to Wounds
          </Button>
        </div>
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled('div')`
  .vitality-categories {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.25rem;
  }

  .wounds-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  /* .wound:nth-of-type(2),
  .wound:nth-of-type(3),
  .wound:nth-of-type(6),
  .wound:nth-of-type(7),
  .wound:nth-of-type(10),
  .wound:nth-of-type(11) {
    background-color: #ccc;
  } */

  .wound:nth-of-type(4n-2),
  .wound:nth-of-type(4n-1) {
    background-color: #ccc;
  }

  .resting-days {
    padding: 0.5rem;
  }
`;
