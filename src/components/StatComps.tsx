import { IconButton, styled } from '@mui/material';
import CasinoIcon from '@mui/icons-material/Casino';

import { Wound } from '../types/character';
import { inRangeArr, names } from '../utils';

interface WoundItemProps {
  wound: Wound;
}

export const WoundItem = ({ wound }: WoundItemProps) => {
  const { name, location, damage, originalDamage, daysResting } = wound;
  return (
    <WoundContainer className="wound">
      <span className="wound-name">{name}</span>
      {location && <span className="wound-location">{location}</span>}
      <span className="wound-damage">{damage}</span>
      <span className="wound-original-damage">{originalDamage}</span>
      <span className="wound-resting-days">{daysResting || '-'}</span>
    </WoundContainer>
  );
};

const WoundContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
`;

interface CategoryProps {
  name: string;
  value: number;
  range: number[];
}

export const Category = ({ name, value, range }: CategoryProps) => {
  return (
    <CategoryContainer
      className={names({ active: inRangeArr(value, range) }, 'category')}
    >
      <span className="category-name">{name}:</span>
      <span className="category-range">
        {range[0]} - {range[1]}
      </span>
    </CategoryContainer>
  );
};

const CategoryContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  gap: 8px;

  font-weight: bold;

  padding: 0.25rem 0.5rem;
  border: 1px solid black;
  border-radius: 4px;

  &.active {
    background-color: #ccc;
    border: 2px solid maroon;
  }

  .category-name {
    text-transform: capitalize;
  }
`;

interface RollButtonProps {
  onClick: () => void;
}
export const RollButton = ({ onClick }: RollButtonProps) => {
  return (
    <IconButton onClick={onClick}>
      <CasinoIcon />
    </IconButton>
  );
};
