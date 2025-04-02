import { Button, styled } from '@mui/material';
import { Character } from '../types/character';
import TableSection from './TableSection';
import Section from './Section';
import { Weapon } from '../types/gear';
import { damageBoostFromSkill } from '../logic/combatSkills';
import { roll } from '../logic/dice';

export default function CombatSkills({ character }: { character: Character }) {
  const meleeWeapons = character.inventory
    .filter((item) => item.type === 'weapon' && item.category === 'weapons')
    .map((item) => item as Weapon);

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
      <div className="weapons">
        {meleeWeapons.map((weapon: Weapon) => {
          // TODO: auto calculate damage based on combat skills and associated weapons
          const totalDamage = damageBoostFromSkill(weapon, 5); // TODO: calculate damage based on rank

          return (
            <div key={weapon.name} className="weapon">
              <p>
                <span>Name: </span>
                <span>{weapon.name}</span>
              </p>
              <p>
                <span>Size: </span>
                <span>{weapon.size}</span>
              </p>
              <p>
                <span>Base Damage: </span>
                <Button variant="outlined" onClick={() => roll(weapon.damage)}>
                  {weapon.damage}
                </Button>
              </p>
              <p>
                <span>Damage: </span>
                <Button variant="outlined" onClick={() => roll(totalDamage)}>
                  {totalDamage}
                </Button>
              </p>
              <p>
                <span>Damage Type: </span>
                <span>{weapon.damageType}</span>
              </p>
              <p>
                <span>Damage Reduction: </span>{' '}
                <span>{weapon.damageReduction || '-'}</span>
              </p>
              <p>
                <span>Measure: </span>
                <span>{weapon.measure}</span>
              </p>
              <p>
                <span>Category: </span>
                <span>{weapon.category}</span>
              </p>
              <p>
                <span>Sub Category: </span>
                <span>{weapon.subCategory}</span>
              </p>
              <p>
                <span>Wear: </span>
                <span>{weapon.wear}</span>
              </p>

              {/* <p>Recovery: {weapon.recovery}</p>
              <p>Initiative: {weapon.initiative}</p>
              <p>Defense: {weapon.defense}</p>
              <p>Flanks: {weapon.flanks}</p>
              <p>Parry: {weapon.parry}</p>
              <p>Cover: {weapon.cover}</p>
              <p>Parry Damage Reduction: {weapon.parryDamageReduction}</p> */}
            </div>
          );
        })}
      </div>
    </Container>
  );
}

const Container = styled('div')`
  display: grid;
  gap: 1rem;

  .weapons {
    display: flex;
    gap: 4rem;
    margin: 0 auto;
  }

  .weapon {
    border: 1px solid black;
    padding: 1rem;
    border-radius: 1rem;
    background-color: #666;
    width: 260px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
      display: flex;
      justify-content: space-between;
    }
  }
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
