import styled, { css } from 'styled-components';

import { colors, shadows } from 'styles';
import { Card } from 'styles/shared';

export const EntitiesWrapper = styled.div<{isFullscreenMode?: boolean}>`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  ${({isFullscreenMode}) => isFullscreenMode && css`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}
  margin-top: 22px;
  margin-bottom: 22px;
`;

export const EntitiesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ViewSwitch = styled.ul`
  display: flex;
  list-style: none;
  margin: 10;
  box-shadow: ${shadows.card};
  border-radius: 4px;
  overflow: hidden;
`;

export const Entity = styled(Card)`
  background: ${colors.surface};
  margin-bottom: 0;
  border-radius: 2px;
  
  h4 {
    margin-top: 0;
    font-weight: 450;
    margin-bottom: 4px;
    color: ${colors.accentLight};
  }
  
  p {
    font-size: 1.2rem;
    color: ${colors.mutedParagraph};
    margin-bottom: 0;
  }
  
  &:hover {
    cursor: pointer;
  }
  
  img {
    float: left;
    margin: 0 1rem 1rem 0;
    max-height: 80%;
  }
`;

export const ViewSwitchButton = styled.li<{active?: boolean}>`
  padding: .6rem;
  align-items: center;
  font-weight: 600;
  font-size: 1.3rem;
  cursor: pointer;
  display: inline-flex;
  &:not(:last-of-type) {
    border-right: 1px solid ${colors.separator};
  }
  
  svg {
    height: 1em;
  }
  
  ${({active}) => active && css`
    color: ${colors.accentLight};
    background: ${colors.activeSwitchBackground};
  `}
`;

export const EntitiesFilters = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  
  & > div {
    align-items: center;
    display: flex;
    gap: 4px;
  }
`;


export const FiltersSeparator = styled.div`
  display: inline-block;
  width: 2px;
  height: 100%;
  min-height: 1.2em;
  background: ${colors.separator};
`;

export const FilterSelectWrapper = styled.div`
  display: flex;
  padding: 0 3px;
  align-items: center;
  color: ${colors.accentLight};
  
  select {
    color: ${colors.accentLight};
    border: 0;

    padding: 0 4px;
    
    &:focus, &:active {
      outline: none;
    }
  }
`;

export const FilterButton = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: ${colors.mutedParagraph};
  gap: 2px;
  
  margin: 0.3rem;
  
  svg {
    height: 1.4em;
  }
  
  &:hover {
    color: ${colors.accentDark};
    cursor: pointer;
  }
`;
export const EntitiesContentWrapper = styled(Card)`
  padding-top: 0;
`;