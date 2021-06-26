import styled, { css } from 'styled-components';

import { media } from 'styles';
import { contained, wider } from 'styles/shared';

export const WebsiteContent = styled.div<{isFullscreen?: boolean}>`
  ${contained};
  grid-template-columns: 100%;
  display: grid;
  column-gap: 30px;
  padding: 0 25px;
  
  ${media.md} {
    grid-template-columns: 300px auto;

    ${({isFullscreen}) => isFullscreen && css`
      grid-template-columns: 100%;
      & > div:first-of-type {
        display: none;
      }
      ${wider};
    `}
  }
`;
