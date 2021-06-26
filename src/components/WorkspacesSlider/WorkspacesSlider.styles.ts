import styled from 'styled-components';
import { colors, shadows } from 'styles';

export const WorkspaceCard = styled.div`
  background: ${colors.surface};
  cursor: pointer;
  
  border-radius: 10px;
  box-shadow: ${shadows.navbar};
  margin-right: 10px;
`;

export const WorkspaceCardPhoto = styled.div<{ src: string }>`
  height: 70px;
  border-radius: 5px 5px 0 0;

  background: url("${({src}) => src}") no-repeat center center;
  background-size: cover;
`;


export const WorkspaceIcon = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.surface};
  
  align-items: center;
  box-shadow: ${shadows.navbar};
  border-radius: 5px;
`;

export const WorkspaceCardMeta = styled.div`
  flex-wrap: wrap;
  align-items: center;  
  color: ${colors.mutedParagraph};
  font-size: 1.2rem;
  display: flex;
  width: 100%;
  margin: 10px 0;
  padding: 0 5px;
  
  span {
    display: inline-flex;
    align-items: center;
    
    svg {
      height: 1em;
    }
    svg, svg path {
      fill: ${colors.mutedMedium};
    }
  }
  
  span:not(:last-of-type)::after {
    display: inline-block;
    content: '';
    margin-left: 7px;
    margin-right: 7px;
    border-radius: 100%;
    height: 5px;
    width: 5px;
    background-color: ${colors.mutedMedium};
  }
`;

export const WorkspacesWrapper = styled.div`
`;

export const WorkspaceCardHeading = styled.div`
  grid-template-rows: 80px;
  margin-top: -20px;  
  display: grid;
  grid-template-columns: 70px auto;
  padding: 0 8px;
  column-gap: 10px;
  h4 {
    margin-top: 40px;
    font-size: 1.7rem;
  }
`;
export const WorkspaceCardDate = styled.p`
  color: ${colors.mutedParagraph};
  font-size: 1.3rem;
  padding: 0 8px 10px 5px;
`;