import { styled } from '@mui/material';
import Section from './Section';
// import TableSection from './TableSection';
import {
  AdvancedSkillStat,
  Character,
  SkillSuiteStat,
} from '../types/character';
import { characterSkillSuiteArray, statToMod } from '../logic/game';
import { AgGridReact, CustomCellRendererProps } from 'ag-grid-react';
import { tableTheme } from '../agGrid/theme';
import { RollButton } from './StatComps';
import { rollMod } from '../logic/dice';

const gridOptions = {
  defaultColDef: {
    width: 100,
    resizable: true,
    cellStyle: { textAlign: 'center', alignItems: 'center' },
  },
  rowHeight: 40,
};

interface RollButtonProps extends CustomCellRendererProps {
  roll: (skill: string) => void;
}

const RollRenderer = (params: RollButtonProps) => {
  return (
    <RollButton
      onClick={() => {
        params.roll(params.data);
      }}
    />
  );
};

export default function Skills({ character }: { character: Character }) {
  const rollSkill = (skill: SkillSuiteStat | AdvancedSkillStat) => {
    console.log('Rolling skill:', skill);
    // Implement the logic to roll the skill here
    const { rolls, total } = rollMod(
      20,
      (skill?.rank ?? 0) + (skill?.mod ?? 0),
      true
    );
    console.log('Rolls:', rolls);
    console.log('Total:', total);
  };

  return (
    <Section title="Skills" primary>
      <SkillsBlock className="skills">
        <Section title="Check Mods & Skill Adepts">
          <div className="skill-mods">
            <div className="mod flex">
              <p>Str</p>
              <p> {statToMod(character.strength)}</p>
            </div>
            <div className="mod flex">
              <p>Dex</p>
              <p> {statToMod(character.dexterity)}</p>
            </div>
            <div className="mod flex">
              <p>Con</p>
              <p> {statToMod(character.constitution)}</p>
            </div>
            <div className="mod flex">
              <p>Int</p>
              <p> {statToMod(character.intellect)}</p>
            </div>
            <div className="mod flex">
              <p>Will</p>
              <p> {statToMod(character.willpower)}</p>
            </div>
            <div className="mod flex">
              <p>Pre</p>
              <p> {statToMod(character.presence)}</p>
            </div>
          </div>
        </Section>
        {/* <TableSection
          columns={['Skill Suites', 'Cost', 'Rank', 'Mod']}
          rows={[
            [
              'Athletics',
              `${character.athletics.cost || ''}`,
              `${character.athletics.rank || ''}`,
              `${character.athletics.mod || ''}`,
            ],
            [
              'Lore',
              `${character.lore.cost || ''}`,
              `${character.lore.rank || ''}`,
              `${character.lore.mod || ''}`,
            ],
            [
              'Streetwise',
              `${character.streetwise.cost || ''}`,
              `${character.streetwise.rank || ''}`,
              `${character.streetwise.mod || ''}`,
            ],
            [
              'Strategy',
              `${character.strategy.cost || ''}`,
              `${character.strategy.rank || ''}`,
              `${character.strategy.mod || ''}`,
            ],
            [
              'Survival',
              `${character.survival.cost || ''}`,
              `${character.survival.rank || ''}`,
              `${character.survival.mod || ''}`,
            ],
            [
              'Trades',
              `${character.trades.cost || ''}`,
              `${character.trades.rank || ''}`,
              `${character.trades.mod || ''}`,
            ],
            [
              'Weird Craft',
              `${character.weirdCraft.cost || ''}`,
              `${character.weirdCraft.rank || ''}`,
              `${character.weirdCraft.mod || ''}`,
            ],
          ]}
        /> */}
      </SkillsBlock>

      {/* <TableSection
        columns={['Advanced Skills', 'Cost', 'Rank', 'Mod']}
        rows={
          character.advancedSkills?.map((skill) => {
            return [
              skill.name,
              `${skill.cost || ''}`,
              `${skill.rank || ''}`,
              `${skill.mod || ''}`,
            ];
          }) ?? []
        }
      /> */}
      <div style={{ height: 316 }}>
        <AgGridReact
          theme={tableTheme}
          gridOptions={gridOptions}
          columnDefs={[
            {
              headerName: 'Skill Suite',
              field: 'name',
              flex: 2,
              cellStyle: { textAlign: 'left' },
            },
            { field: 'baseCost' },
            // render 0 as 'U' 
            { field: 'rank', valueFormatter: (params) => (params.value === 0 ? 'U' : params.value) },
            { field: 'mod' },
            {
              headerName: 'Roll',
              cellRenderer: RollRenderer,
              cellRendererParams: {
                roll: rollSkill,
              },
            },
          ]}
          rowData={characterSkillSuiteArray(character)}
        />
      </div>
      <div style={{ height: 35 + character.advancedSkills.length * 42 }}>
        <AgGridReact
          theme={tableTheme}
          gridOptions={gridOptions}
          columnDefs={[
            {
              headerName: 'Advanced Skill',
              field: 'name',
              flex: 2,
              cellStyle: { textAlign: 'left' },
            },
            { field: 'baseCost' },
            { field: 'rank' },
            { field: 'mod' },
            {
              headerName: 'Roll',
              cellRenderer: RollRenderer,
              cellRendererParams: {
                roll: rollSkill,
              },
            },
          ]}
          rowData={character.advancedSkills}
        />
      </div>
    </Section>
  );
}

const SkillsBlock = styled('div')`
  .skill-mods {
    font-size: 1.2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .mod {
    display: flex;
    justify-content: center;
    padding: 4px;
  }
  .mod:nth-of-type(even) {
    background-color: #ccc;
  }
`;
