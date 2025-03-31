import { Box, Button, styled, TextField } from '@mui/material';
import { CharacterComponentProps } from '../types/common';
import { Gear, gearCategories, GearSize } from '../types/gear';

import rawEquipment from '../data/equipment.ts';
import { AgGridReact, CustomCellRendererProps } from 'ag-grid-react';
import { tableTheme } from '../agGrid/theme';
import { useState } from 'react';
import { Add, Close } from '@mui/icons-material';

const equipment: Gear[] = rawEquipment.map((item: Gear) => ({
  ...item,
  size: item.size as GearSize, // Ensure size matches GearSize type
}));

const filterItemsByCategory = (items: Gear[], categories: string[]): Gear[] => {
  if (categories.length === 0) return items;

  return items.filter((item) => categories.includes(item.category));
};

const searchItems = (items: Gear[], searchTerm: string): Gear[] => {
  if (!searchTerm) return items;

  return items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

interface AddItemCellProps extends CustomCellRendererProps {
  addItemToInventory: (item: Gear) => void;
}

const AddItemCell = (params: AddItemCellProps) => {
  const { data, addItemToInventory } = params;

  return (
    <Button
      variant="outlined"
      size="small"
      color="success"
      onClick={() => addItemToInventory(data)}
    >
      <Add />
    </Button>
  );
};

interface ModalProps extends CharacterComponentProps {
  onClose: () => void;
}

export default function ManageItems({
  character,
  setCharacter,
  onClose,
}: ModalProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const addItemToInventory = (item: Gear) => {
    const newInventory = [...character.inventory, item];
    setCharacter({ ...character, inventory: newInventory });
  };

  console.log(addItemToInventory.toString().length);

  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };
  const clearFilters = () => {
    setActiveFilters([]);
  };

  const categoryFilteredRows = filterItemsByCategory(equipment, activeFilters);

  const dataRows = searchItems(categoryFilteredRows, '');

  return (
    <Container>
      <div className="top flex">
        <TextField placeholder="search" />
        <Button onClick={onClose}>
          <Close sx={{ color: 'white' }} />
        </Button>
      </div>
      <div
        className="filter-selections"
        style={{ margin: '12px', backgroundColor: 'white' }}
      >
        {gearCategories.map((category) => (
          <Button
            key={category}
            variant={
              activeFilters.includes(category) ? 'contained' : 'outlined'
            }
            onClick={() => toggleFilter(category)}
          >
            {category}
          </Button>
        ))}

        <Button onClick={clearFilters} variant="contained" color="secondary">
          Clear Filters
        </Button>
      </div>

      <div style={{ height: 800 }}>
        <AgGridReact
          theme={tableTheme}
          rowData={dataRows}
          columnDefs={[
            {
              field: 'name',
              headerName: 'Name',
            },
            { field: 'size' },
            { field: 'category' },
            { field: 'subCategory' },
            {
              headerName: 'Add to Inventory',
              cellRenderer: AddItemCell,
              cellRendererParams: { addItemToInventory },
            },
          ]}
          defaultColDef={{
            sortable: true,
            filter: true,
          }}
        />
      </div>
    </Container>
  );
}

const Container = styled(Box)`
  margin: 20px 5%;
  padding: 20px 32px;
  background-color: #666;

  font-size: 1.2rem;
  max-width: 90%;
  border-radius: 12px;

  .top {
    justify-content: space-between;
  }
`;
