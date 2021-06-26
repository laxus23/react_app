import styled, { css } from 'styled-components';

import { colors, shadows } from 'styles';

export const contained = css`
  max-width: 1200px;
  margin: 0 auto;
`;
export const Table = styled.table`
  border-spacing: 15px;
  thead {
    font-weight: bold;
    color: ${colors.accentDark};
    border-bottom: 1px solid ${colors.accentDark};
  }
  td {
    text-overflow: ellipsis;
  }
`;
export const wider = css`
  max-width: 90vw;
  margin: 0 auto;
`;

export const Card = styled.div`
  color: ${colors.mutedMedium};
  box-shadow: ${shadows.card};
  background-color: ${colors.surface};
  margin-bottom: 20px;
  padding: 20px 12px;
  border-radius: 8px;
`;