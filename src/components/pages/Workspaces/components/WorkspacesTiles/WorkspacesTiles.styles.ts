import styled from 'styled-components';

import { colors, media } from 'styles';
import { Card } from 'styles/shared';

export const Excerpt = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.mutedParagraph};
  font-size: 1.4rem;
`;

export const TilesWrapper = styled.div`
  display: grid;
  column-gap: 10px;
  
  ${media.sm} {
    grid-template-columns: 1fr 1fr;
  }
  
  ${media.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const Tile = styled(Card)`
  padding: 15px;
  
  svg {
    width: 20px;
    height: 40px;
    color: ${colors.accentDark};
  }
  
  h4 {
    color: ${colors.accentDark};
    font-weight: 450;
    
    strong {
      font-weight: 450;
    }
    margin: 10px 0px;
  }
  
  p {
    font-size: 1.3rem;
    color: ${colors.accentLight};
  }
`;
