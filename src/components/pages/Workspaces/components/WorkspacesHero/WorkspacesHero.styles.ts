import styled from 'styled-components';

import { colors } from 'styles';
import { Card } from 'styles/shared';

export const Wrapper = styled(Card)`
  overflow: hidden;
  position: relative;
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
  height: 220px;
  img {
    width: 100%;
  }
`;

export const WorkspacesHeroContent = styled.div`
  background-color: ${colors.surface};
  padding: 10px 20px;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  column-gap: 20px;
  width: 100%;
  
  
  p {
    font-size: 1.3rem;
    color: ${colors.mutedParagraph};
    margin: 0;
  }
  
  h4 {
    margin-bottom: 0rem;
    margin-top: 0;
  }
  
  svg {
    height: 100px;
    width: 50px;
  }
`;