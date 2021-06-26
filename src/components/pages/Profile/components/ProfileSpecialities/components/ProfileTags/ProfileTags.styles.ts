import styled from 'styled-components';

import { colors } from "styles";

export const ProfileTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  & > svg:last-child:hover {
    stroke: ${colors.mutedMedium};
    cursor: pointer;
  }
  & > svg:last-child {
    display: none;
    margin-left: 2rem;
  }
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid ${colors.mutedParagraph};
  margin-bottom: -2px;
  font-size: inherit;
  color: inherit;
  max-width: 50%;
  min-width: 20%;
  height: 1.5em;
  &:focus, &:active {
    outline: none;
  }
`;
export const ProfileTag = styled.span`
  display: inline-block;
  margin: 5px 7px;
  padding: 6px;
  cursor: default;
  
  background-color: ${colors.aqua};
  border-radius: 8px;
  color: #fff;
  svg {
    display: none;
    max-height: 90%;
    height: .8em;
  }
  
  svg:hover {
    stroke: ${colors.deletion};
    cursor: pointer;
  }
  &:first-of-type {
    margin-left: 1;
  }
`;
