// header background colored in black with white text
// alternate row colors
// use css grid to layout the table

import { styled } from '@mui/material';
import { names } from '../utils';

export default function TableSection({
  columns,
  rows,
}: {
  columns: string[];
  rows: string[][];
}) {
  return (
    <Container columns={columns.length}>
      {columns.map((header) => (
        <div key={header} className="table-header cell">
          {header}
        </div>
      ))}
      {rows.map((row, i) =>
        row.map((cell, j) => (
          <div key={i + j} className={names({ even: i % 2 === 0 }, 'cell')}>
            {cell}
          </div>
        ))
      )}
    </Container>
  );
}

const Container = styled('div')<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-gap: 1px;
  background-color: #888;

  .table-header {
    background-color: #222;
    color: white;
    text-shadow: 1px 1px 1px black;
    font-size: 1.2rem;
  }

  .cell.even {
    background-color: #666;
  }
`;
