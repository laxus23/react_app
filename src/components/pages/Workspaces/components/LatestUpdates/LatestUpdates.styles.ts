import styled, { css } from 'styled-components';

import { Card } from 'styles/shared';
import { shadows, colors } from 'styles';

export const LastUpdatesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  
  div {
    display: flex;
    column-gap: 15px;
  }
  
  h4 {
    margin: 1;
  }
`;

export const Tag = styled.span<{backgroundColor?: string, textColor?: string, link?: boolean}>`
  box-shadow: ${shadows.card};
  padding: 3px 5px;
  border-radius: 6px;
  
  ${({backgroundColor}) => backgroundColor && css`
    background-color: ${backgroundColor};
    border-color: transparent;
  `}
  
  ${({textColor}) => textColor && css`
    color: ${textColor};
    
    svg {
      height: 1em;
      path {
        stroke: ${textColor};
        fill: ${textColor};
      }
    }
  `}
  
  ${({link}) => link && css`
    box-shadow: none;
    padding: 1px;
  `}
`;

export const LatestUpdatesWrapper = styled(Card)`
  padding: 18px 20px;
`;
export const UpdateMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.3rem;
  column-gap: 10px;
  row-gap: 10px;
  span:not(:last-of-type) {
    display: inline-flex;
    align-items: center;
    
    &:after {
      display: block;
      content: '';
      height: 5px;
      width: 5px;
      margin-left: 12px;
      border-radius: 100%;
      background-color: ${colors.separator};  
    }
  }
`;

export const FilterTags = styled.div`
  row-gap: 10px;
  margin-top: 10px;  
  display: flex;
  column-gap: 10px;
`;
export const Update = styled(Card)`
  margin-top: 10px;
  
  h4 {
    margin: 0;
    color: ${colors.accentDark};
    font-size: 1.7rem;
  }
  
  p {
    color: ${colors.paragraph};
    line-height: 1.3em;
    font-size: 1.4rem;
  }
`;