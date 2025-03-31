import { styled } from '@mui/material';
import { Character } from '../types/character';
import TableSection from './TableSection';
import Section from './Section';

export default function CombatSkills({ character }: { character: Character }) {
  return (
    <Container>
      <Section title="Combat Mods & Martial">
        <ModsAndMartials>
          <div className="mod">
            <p>Attack</p>
            <p>{character.attackMod}</p>
          </div>
          <div className="mod">
            <p>Defense</p>
            <p>{character.defenseMod}</p>
          </div>
          <div className="mod">
            <p>Damage</p>
            <p>{character.damageMod}</p>
          </div>
          <div className="mod">
            <p>Recovery</p>
            <p>{character.recoveryMod}</p>
          </div>
        </ModsAndMartials>
      </Section>
      <TableSection
        columns={['Skill Suite', 'Cost', 'Rank']}
        rows={[
          [
            'Armor',
            `${character.armor.cost || '-'}`,
            `${character.armor.rank || '-'}`,
          ],
          [
            'Melee',
            `${character.meleeWeapons.cost || '-'}`,
            `${character.meleeWeapons.rank || '-'}`,
          ],
          [
            'Ranged',
            `${character.rangedWeapons.cost || '-'}`,
            `${character.rangedWeapons.rank || '-'}`,
          ],
          [
            'Shields',
            `${character.shields.cost || '-'}`,
            `${character.shields.rank || '-'}`,
          ],
          [
            'Unarmed',
            `${character.unarmed.cost || '-'}`,
            `${character.unarmed.rank || '-'}`,
          ],
        ]}
      />
      <TableSection
        columns={['Advanced Skill', 'Cost', 'Rank']}
        rows={character.combatSkills.map((skill) => [
          skill.name,
          `${skill.cost || '-'}`,
          `${skill.rank || ''}`,
        ])}
      />
    </Container>
  );
}

const Container = styled('div')`
  display: grid;
`;

const ModsAndMartials = styled('div')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  .mod {
    display: flex;
    gap: 1rem;
    justify-content: center;
    font-size: 1.2rem;
  }

  /* even gray */
  .mod:nth-of-type(even) {
    background-color: #666;
  }
`;
