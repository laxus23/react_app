import styled, { css } from 'styled-components';

import { media, colors } from 'styles';

import { Props } from './NavIcon';

export const StyledIcon = styled.div<Props>`
  position: relative;

  span {
    display: inline-block;
    position: absolute;
    background-color: ${colors.link};
    color: white;
    font-size: 1rem;
    padding: .2rem .4rem;
    border-radius: 25px;
    top: 0;
    right: 0;
  }

  ${media.lg} {
    ${({hideLg}) => hideLg && css`display: none`};
  }
`;