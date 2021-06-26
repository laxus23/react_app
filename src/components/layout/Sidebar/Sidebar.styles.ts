import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { shadows, colors } from 'styles';

export const SidebarProfileSection = styled.div`
  width: 102%;
  text-align: center;
  box-shadow: ${shadows.card};
  border-radius: 4px;
  padding: 10px 0;
  background: #fff;
  
  p {
    color ${colors.mutedParagraph};
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  h3 {
    color: ${colors.accentLight};
    margin-top: 10px;
    margin-bottom: 15px;
    font-weight: 500;
    font-size: 1.7rem;
  }

`;

export const Avatar = styled.img`
  width: 100px;
  height: 90px;
`;

export const SidebarProfileControlButton = styled.a`
  padding: .5rem;
  border: 1px solid #a0a0a0;
  box-shadow: 0 2px 2px #d7d7d7;
  height: 25px;
  width: 35px;
  border-radius: 10px;
  transition-duration: .1s;

  svg {
    max-height: 100%;
    max-width: 100%;
  }

`;
export const Separator = styled.hr`
  height: 2px;
  background-color: ${colors.separator};
`;

export const SidebarProfileControl = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  margin-top: 7px;
`;
export const SidebarProfileControlLink = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  color: ${colors.accentMedium};
  
  svg {
    margin-right: 10px; 
  }
  
  &:hover {
    color: ${colors.accentLight};
  }
`;

export const SidebarNavigationItem = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-weight: 550;
  padding-left: 27px;
  color: ${colors.mutedMedium};
  height: 1.7em;
  
  svg {
    margin-right: 15px;
    width: 1.5em;
    max-height: 90%;
  }
`;

export const SidebarWrapper = styled.div`
  margin-bottom: 60px;
`;
