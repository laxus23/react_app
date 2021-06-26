import styled, { css } from 'styled-components';

import { InputProps } from './Input';

import { borders } from 'styles';

export const InputWrapper = styled.div`
  width: 90%;
  position: relative;
  svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    
    &:hover {
      opacity: .6;
    }
  }
`;
export const StyledInput = styled.input<InputProps>`
  border: ${borders.input};
  height: 3.2rem;
  border-radius: 4px;
  padding: 0 2px;

  ::placeholder {
    color: #929292;
  }

  ${({inputType, align}) => inputType === 'search' && align !== 'left' && css`
    text-align: center;
  `}
`;
