import { AgGridReact, CustomCellRendererProps } from 'ag-grid-react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import {
  sizeCountToTotalWeight,
  strToWeightCarryCapacity,
  totalCarryCapacity,
  totalWeight,
  weightToSize,
} from '../logic/game';

import Section from './Section';
import { Button, IconButton, Modal, styled } from '@mui/material';
import { Gear } from '../types/gear';
import { tableTheme } from '../agGrid/theme';
import { CharacterComponentProps } from '../types/common';
import { useState } from 'react';
import ManageInventory from './ManageInventory';

const iconStyles = {
  fontSize: '14px',
};

interface CountCellProps extends CustomCellRendererProps {
  changeGearCount: (item: Gear, delta: number) => void;
}

const CountCell = (params: CountCellProps) => {
  const { changeGearCount, data } = params;

  return (
    <CountCellWrapper>
      <Button
        variant="outlined"
        size="small"
        color="error"
        disabled={params.value === 0 || !params.value}
        onClick={() => changeGearCount(data, -1)}
      >
        <RemoveIcon style={iconStyles} />
      </Button>
      <p>{params.value}</p>
      <Button
        variant="outlined"
        size="small"
        color="success"
        onClick={() => changeGearCount(data, 1)}
      >
        <AddIcon style={iconStyles} />
      </Button>
    </CountCellWrapper>
  );
};

interface EquipToggleCellProps extends CustomCellRendererProps {
  toggleEquipped: (item: Gear) => void;
}

const EquipToggleCell = (params: EquipToggleCellProps) => {
  const { data, toggleEquipped } = params;

  return (
    <IconButton
      size="small"
      color="primary"
      onClick={() => toggleEquipped(data)}
    >
      {data.equipped ? <CheckIcon color="success" /> : <CloseIcon />}
    </IconButton>
  );
};

interface RemoveItemCellProps extends CustomCellRendererProps {
  removeItemFromInventory: (item: Gear) => void;
}
const RemoveItemCell = (params: RemoveItemCellProps) => {
  const { data, removeItemFromInventory } = params;

  return (
    <IconButton
      size="small"
      color="error"
      onClick={() => removeItemFromInventory(data)}
    >
      <DeleteForeverIcon color="error" />
    </IconButton>
  );
};

const gridOptions = {
  defaultColDef: {
    width: 100,
    resizable: true,
    cellStyle: { textAlign: 'center' },
  },
};

export default function GearLoot({
  character,
  setCharacter,
}: CharacterComponentProps) {
  const [inventoryModalOpen, setInventoryModalOpen] = useState(false);

  const changeGearCount = (item: Gear, delta: number = 1) => {
    const newGear = character.inventory.map((gear: Gear) => {
      if (gear.name === item.name) {
        const originalCount = gear.count ?? 1;
        const newGearCount = originalCount + delta;

        return { ...gear, count: newGearCount };
      }

      return gear;
    });

    setCharacter({ ...character, inventory: newGear });
  };

  const toggleEquipped = (item: Gear) => {
    const newGear = character.inventory.map((gear: Gear) => {
      return gear.name === item.name
        ? { ...gear, equipped: !gear.equipped }
        : gear;
    });

    setCharacter({ ...character, inventory: newGear });
  };

  const baseCarryCapacity = strToWeightCarryCapacity(character.strength);
  const currentCarryCapacity = totalCarryCapacity(character);
  const totalWeightCarried = totalWeight(character);
  const remainingCarryCapacity = currentCarryCapacity - totalWeightCarried;

  return (
    <div>
      <CarryCapacities className="carry-cap">
        <h2>
          Gear & Loot - {character.name} base Carry Capacity:{' '}
          {weightToSize(baseCarryCapacity)}
        </h2>
        <div className="total-carry">
          <h3>Current Carry Capacity: {weightToSize(currentCarryCapacity)}</h3>
          <h3>
            Remaining Carry Capacity: {weightToSize(remainingCarryCapacity)}
          </h3>
        </div>
        <h3>Total Weight Carried: {weightToSize(totalWeightCarried)}</h3>
      </CarryCapacities>
      <Button
        variant="outlined"
        color="success"
        onClick={() => setInventoryModalOpen(true)}
      >
        Manage Inventory
      </Button>
      <Section title="Gear & Loot" primary>
        <div style={{ height: 550 }}>
          <AgGridReact
            theme={tableTheme}
            gridOptions={gridOptions}
            columnDefs={[
              {
                headerName: 'Item',
                field: 'name',
                flex: 2,
                cellStyle: { textAlign: 'left' },
              },
              {
                field: 'count',
                cellRenderer: CountCell,
                cellRendererParams: {
                  changeGearCount,
                },
                flex: 1,
              },
              { field: 'cost', width: 80 },
              {
                headerName: 'Total Size',
                field: 'size',
                valueGetter: (params) =>
                  sizeCountToTotalWeight(
                    params?.data?.size ?? null,
                    params?.data?.count ?? 1
                  ),
              },
              { headerName: 'Unit Size', field: 'size' },
              { field: 'type' },
              // TODO: add adjustment functions / buttons
              { field: 'wear', width: 60 },
              {
                headerName: 'Equipped',
                field: 'equipped',
                cellStyle: { textAlign: 'center' },
                cellRenderer: EquipToggleCell,
                cellRendererParams: {
                  toggleEquipped,
                },
              },
              {
                cellStyle: { textAlign: 'center' },
                cellRenderer: RemoveItemCell,
                cellRendererParams: {
                  removeItemFromInventory: (item: Gear) => {
                    const newGear = character.inventory.filter(
                      (gear: Gear) => gear.name !== item.name
                    );

                    setCharacter({ ...character, inventory: newGear });
                  },
                },
                width: 60,
              },
            ]}
            rowData={character.inventory}
          />
        </div>
      </Section>
      <Modal
        open={inventoryModalOpen}
        onClose={() => setInventoryModalOpen(false)}
        aria-labelledby="inventory-modal"
        aria-describedby="inventory-modal-description"
      >
        <ManageInventory
          character={character}
          setCharacter={setCharacter}
          onClose={() => setInventoryModalOpen(false)}
        />
      </Modal>
    </div>
  );
}

const CarryCapacities = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const CountCellWrapper = styled('div')`
  display: grid;
  grid-template-columns: 60px 1fr 60px;
  width: 100%;
  font-size: 18px;
  place-items: center;
  padding: 4px;
`;
