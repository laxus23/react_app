import styled, { css } from 'styled-components';

import { colors, shadows, media } from 'styles';
import { contained } from 'styles/shared';

export const NavBarWrapper = styled.nav<{ isFullscreen: boolean }>`
  width: 100%;
  min-height: 50px;
  position: fixed;
  top: 0;
  background-color: ${colors.surface};
  box-shadow: ${shadows.navbar};
  z-index: 9999;

  transition-duration: .4s;
  ${({isFullscreen}) => isFullscreen && css`
    transform: translateY(-100%);
  `}
`;

export const NavIconsWrapper = styled.div`
  display: flex;
  padding: 0 0px;
  width: 100%;
  
  ${media.sm} {
    width: unset;
  }
  
  div {
    width: 35px;
    height: 35px;
    padding: 8px;
    border-radius: 70%;
    cursor: pointer;
    
    &:not(:first-child) {
      background-color: #eee;
    }
    
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

export const SearchWrapper = styled.div`
  display: none;
  width: 480px;
  max-width: 100%;
  
  input {
    width: 100%;
  }
  
  ${media.lg} {
    display: flex;
  }
`;

export const CompanyLogo = styled.img`
  height: 35px;
  margin-right: 10px;
  cursor: pointer;
`;
export const NavBarContainer = styled.div`
  ${contained};
  width: 100%;
  display: flex;
  row-gap: 5px;
  padding: 10px 0;
  flex-wrap: wrap;
  height: 100%;
  
  ${media.sm} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0 10px;
  }
  & > div {
    display: flex;
  }
`;
