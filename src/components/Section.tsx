import React, { useState } from 'react';

import { styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { names } from '../utils';

interface SectionProps {
  title: string | React.ReactNode;
  titleRight?: string | React.ReactNode;
  children: React.ReactNode;
  primary?: boolean;
  collapsable?: boolean;
}

export default function Section({
  title,
  titleRight,
  children,
  primary = false,
  collapsable = false,
}: SectionProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SectionContainer>
      <h4 className={names({ primary, collapsed })}>
        <span className="title-left">{title}</span>
        <span className="title-right">
          {titleRight}
          {collapsable && (
            <span
              className="title-right"
              onClick={() => setCollapsed(!collapsed)}
              style={{ cursor: 'pointer' }}
            >
              <ExpandMoreIcon
                style={{
                  transform: collapsed ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
              />
            </span>
          )}
        </span>
      </h4>
      <div className={names({ collapsed }, 'content')}>{children}</div>
    </SectionContainer>
  );
}

const SectionContainer = styled('section')`
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  background-color: #888;
  width: 100%;

  h4 {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 6px 10px;
    background-color: #222;
    color: white;
    text-shadow: 1px 1px 1px black;
    text-align: start;
    font-size: 1.2rem;
  }

  h4.primary {
    background-color: maroon;
    font-size: 1.3rem;
  }

  .title-right {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .content {
    padding: 0px;
    overflow: hidden;
    transition: height 0.3s ease;
    height: unset;

    &.collapsed {
      height: 0;
    }
  }
`;
