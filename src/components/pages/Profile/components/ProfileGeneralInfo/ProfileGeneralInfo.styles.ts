import styled from 'styled-components';

import { Card } from 'styles/shared';

export const GridWrapper = styled(Card)`
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  min-height: unset;
  height: 160px;
  column-gap: 14px;
  p {
    margin: 0;
  }
`;
export const ProfileAvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  img {
    width: 90px;
    margin-bottom: 5px;
    max-width: 90%;
    height: 90px;
    border-radius: 90%;
    
  }
`;
export const ProfileGeneralDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;



export const ProfileContactDetails = styled.div`
  display: flex;
  row-gap: 9px;
  flex-direction: column;
  justify-content: flex-end;
`;