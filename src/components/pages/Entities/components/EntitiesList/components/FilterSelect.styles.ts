import styled from 'styled-components';

import { colors } from "styles";
import { Card } from "styles/shared";

export const FilterDropdownWrapper = styled.div`
  position: relative;
`;
export const FilterDropdownContent = styled(Card)`
  position: absolute;
  top: 35px;
  padding: 16px;
  left: 0;
  min-width: 500px;
  max-width: 95vw;
`;

export const FilterSelectInfo = styled.p`
  margin: 0;
  font-size: 1.4rem;
  color: ${colors.mutedMedium};
`;
export const FilterDropdownButton = styled.span`
  display: inline-flex;
  align-items: center;
  column-gap: 4px;
  padding: 8px;
  cursor: pointer;
  background: ${colors.activeSwitchBackground};
  border-radius: 4px;
  font-size: 1.4rem;
  color: ${colors.accentLight};
  
  svg {
    height: 1.1em;
  }
`;
export const AddFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  
  select {
    border: 0;
    font-size: 1.6rem;
    color: ${colors.accentDark};
    margin-left: 15px;
    
    &:active, &:focus {
      outline: none;
    }
  }
`;
export const Filter = styled.p`
  display: flex;
  column-gap: 16px;
  font-size: 1.4rem;
  align-items: center;
  
  select {
    border: 0;
    font-size: 1.6rem;

    &:focus, &:active {
      outline: none;
    }
  }
  
  input {
    border: 0;
    background: ${colors.separator};
    padding-left: 2rem;
    height: 3rem;
    
    &:focus, &:active {
      outline: none;
    }
  }
  
  svg {
    cursor: pointer;
    
    &:hover {
      stroke: ${colors.deletion};
    }
  }
`;

export const AddFilterButton = styled.a`
  display: inline-flex;
  color: ${colors.accentDark};
  cursor: pointer;
  column-gap: 16px;
`;