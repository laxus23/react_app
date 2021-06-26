import styled from 'styled-components';

import { colors } from 'styles';

export const StyledInput = styled.input`
  border: none;
  height: 1.4em;
  font-size: inherit;
  color: inherit;
  border-bottom: 2px solid ${colors.mutedParagraph};
  margin-bottom: -2px;
  max-width: 100%;
  min-width: 50%;
  
  
  &:focus, &:active {
    outline: none;
  }
`;
export const Paragraph = styled.p`
  display: flex;
  align-items: center;
  
  svg {
    margin-left: 1rem;
    display: none;
    height: .8em;
  }
  
  svg:hover {
    stroke: ${colors.accentDark};
    cursor: pointer;
  }
  
  &:hover {
    svg {
      display: inline-block;
    }
  }
`;
