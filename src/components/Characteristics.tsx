import { Button, styled } from '@mui/material';
import { Ally, Character, Conviction, NameRank } from '../types/character';
import Section from './Section';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { names } from '../utils';
import StressNerve from './StressNerve';
import Vitality from './Vitality';

interface CharacteristicsProps {
  character: Character;
  setCharacter: (character: Character) => void;
}

export default function Characteristics({
  character,
  setCharacter,
}: CharacteristicsProps) {
  const { integrity } = character;

  const changeIntegrity = (delta: number = 1) => {
    setCharacter({ ...character, integrity: character.integrity + delta });
  };
  const changeGritDice = (delta: number = 1) => {
    setCharacter({ ...character, gritDice: character.gritDice + delta });
  };
  const changeCRP = (delta: number = 1) => {
    setCharacter({
      ...character,
      crpUnspent: Math.max(0, character.crpUnspent + delta),
    });
  };

  const changeCRPSpent = (delta: number = 1) => {
    if (character.crpUnspent < 1) return;

    setCharacter({
      ...character,
      crpUnspent: character.crpUnspent - delta,
      crpSpent: character.crpSpent + delta,
    });
  };

  return (
    <>
      <Top className="stats-movement flex">
        <Section title="Stats" primary>
          <StatBlock>
            <p>
              <span>Str:</span>
              <span>{character.strength}</span>
            </p>
            <p>
              <span>Dex:</span>
              <span>{character.dexterity}</span>
            </p>
            <p>
              <span>Con:</span>
              <span>{character.constitution}</span>
            </p>
            <p>
              <span>Int:</span>
              <span>{character.intellect}</span>
            </p>
            <p>
              <span>Will:</span>
              <span>{character.willpower}</span>
            </p>
            <p>
              <span>Pre:</span>
              <span>{character.presence}</span>
            </p>
          </StatBlock>
        </Section>
        <Section title="Movement" primary>
          <MovementBlock>
            <div className="row">
              <span className="speed-cat">Crawl:</span>
              <span className="speed">{character.baseMovement}</span>
              <span className="interval">∞ Seconds</span>
            </div>
            <div className="row">
              <span className="speed-cat">Walk:</span>
              <span className="speed">{character.baseMovement * 2}</span>
              <span className="interval">∞ Seconds</span>
            </div>
            <div className="row">
              <span className="speed-cat">Jog:</span>
              <span className="speed">{character.baseMovement * 4}</span>
              <span className="interval">∞ Seconds</span>
            </div>
            <div className="row">
              <span className="speed-cat">Run:</span>
              <span className="speed">{character.baseMovement * 6}</span>
              <span className="interval">10 Interval</span>
            </div>
            <div className="row">
              <span className="speed-cat">Sprint:</span>
              <span className="speed">{character.baseMovement * 8}</span>
              <span className="interval">5 Interval</span>
            </div>
          </MovementBlock>
        </Section>

        <div className="stress-vitality">
          <StressNerve character={character} setCharacter={setCharacter} />
          <Vitality character={character} setCharacter={setCharacter} />
        </div>
        <div className="crp">
          <div className="flex">
            <Button variant="contained" onClick={() => changeCRP(-1)}>
              <RemoveIcon />
            </Button>
            <h3>CRP Unspent: {character.crpUnspent} </h3>
            <Button variant="contained" onClick={() => changeCRP(1)}>
              <AddIcon />
            </Button>
          </div>
          <div className="flex">
            <Button variant="contained" onClick={() => changeCRPSpent(-1)}>
              <RemoveIcon />
            </Button>
            <h3> CRP Spent {character.crpSpent}</h3>
            <Button variant="contained" onClick={() => changeCRPSpent(1)}>
              <AddIcon />
            </Button>
          </div>
          <h3>CRP to Next Level: {character.level * 3 + 50}</h3>
        </div>
      </Top>
      <br />

      <Section title="Characteristics" primary>
        <IntegrityBlock className="integrity flex">
          <div className="integrity-value flex">
            <Button variant="outlined" onClick={() => changeIntegrity(-1)}>
              <RemoveIcon />
            </Button>
            <p>Integrity: {integrity}</p>
            <Button variant="contained" onClick={() => changeIntegrity(1)}>
              <AddIcon />
            </Button>
          </div>
          <div className="integrity-levels">
            <p className={names({ active: integrity < 6 })}>0 - 5: None</p>
            <p className={names({ active: integrity > 5 && integrity < 11 })}>
              6 - 10: D4!
            </p>
            <p className={names({ active: integrity > 10 && integrity < 16 })}>
              11 - 15: D6!
            </p>
            <p className={names({ active: integrity > 15 && integrity < 21 })}>
              16 - 20: D8!
            </p>
            <p className={names({ active: integrity > 20 })}>20 - 25: D10!</p>
          </div>

          <div className="grit-dice-value flex">
            <Button variant="outlined" onClick={() => changeGritDice(-1)}>
              <RemoveIcon />
            </Button>
            <p>Grit Dice: {character.gritDice}</p>
            <Button variant="contained" onClick={() => changeGritDice(1)}>
              <AddIcon />
            </Button>
          </div>
        </IntegrityBlock>
      </Section>

      <CharacteristicsBlock>
        <Section title="Goals">
          <div className="list">
            {character.goals.map((goal: string, index: number) => (
              <div className="row" key={index}>
                {goal}
              </div>
            ))}
          </div>
        </Section>
        <Section title="Relationships">
          <div className="list">
            {character.relationships.map(
              (relationship: NameRank, index: number) => (
                <div className="row" key={index}>
                  {relationship.name} - {relationship.rank}
                </div>
              )
            )}
          </div>
        </Section>
        <Section title="Flaws">
          <div className="list">
            {character.flaws.map((flaw: string, index: number) => (
              <div className="row" key={index}>
                {flaw}
              </div>
            ))}
          </div>
        </Section>
        <Section title="Convictions">
          <div className="list">
            {character.convictions.map(
              (conviction: Conviction, index: number) => (
                <div className="row" key={index}>
                  {conviction.name} - {conviction.rank}
                </div>
              )
            )}
          </div>
        </Section>
        <Section title="Descriptions">
          <div className="list">
            {character.descriptions.map(
              (description: NameRank, index: number) => (
                <div className="row" key={index}>
                  {description.name} - {description.rank}
                </div>
              )
            )}
          </div>
        </Section>
        <Section title="Reputations">
          <Reputation>
            <div className="list">
              {character.reputations.map(
                (reputation: string, index: number) => (
                  <div className="row" key={index}>
                    I'm known for {reputation}
                  </div>
                )
              )}
            </div>
          </Reputation>
        </Section>

        <Section title="Allies, Contacts, & Assets">
          <Allies>
            <div className="list">
              {character.allies.map((ally: Ally, index: number) => (
                <div className="row" key={index}>
                  {ally.name} - {ally.description}
                </div>
              ))}
            </div>
          </Allies>
        </Section>
      </CharacteristicsBlock>
    </>
  );
}

const Top = styled('div')`
  display: grid;
  grid-template-columns: auto 2fr 5fr;
  gap: 12px;

  .stress-vitality {
    display: grid;
    gap: 12px;
    grid-row: span 2;
  }

  .crp {
    grid-column: 1 / 3;
  }
`;

const StatBlock = styled('div')`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  flex-wrap: wrap;
  gap: 6px;
  justify-content: space-around;
  margin: 0;

  p {
    margin: 0;
    padding: 2px 16px;
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  p:nth-of-type(even) {
    padding: 2px 16px;
    background-color: #ccc;
  }
`;

const MovementBlock = styled(StatBlock)`
  text-transform: uppercase;
  font-weight: bold;

  .row {
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: 90px 30px 1fr;
    place-items: center;
    white-space: nowrap;
  }

  .row:nth-of-type(odd) {
    background-color: #ccc;
  }

  .row .speed-cat {
    justify-self: end;
    align-self: center;
  }
`;

const IntegrityBlock = styled('div')`
  font-weight: bold;

  .integrity-levels {
    display: flex;
    gap: 6px;
  }

  .active {
    background-color: #ccc;
    border: 2px solid maroon;
  }

  p {
    border: 1px solid black;
    border-radius: 4px;
    padding: 4px 6px;
  }
`;

const CharacteristicsBlock = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  justify-content: space-around;
  margin: 0;

  .list {
    padding: 0;

    .row {
      text-align: start;
      padding-left: 8px;
    }

    .row:nth-of-type(even) {
      background-color: #ccc;
    }
  }
`;
const Reputation = styled('div')`
  grid-column: 1 / 3;
`;

const Allies = styled('div')``;
