import styled from 'styled-components';
import { colors, shadows, media } from 'styles';

export const LatestPublicationsWrapper = styled.div`
  display: grid;
  grid-template-columns: 0%;
  
  ${media.xl} {
    grid-template-columns: 280px auto;
    height: 280px;
  }
  background-color: ${colors.surface};
  border-radius: 5px;
`;
export const LatestPublicationsContent = styled.div`
  padding: 8px;
  display: flex;
  
  flex-direction: column;
  align-items: flex-start;
  
  h3 {
    margin: 0;
    margin-bottom: 12px;
  }
`;
export const PublicationsList = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  gap: 15px;
  
  img {
    width: 55px;
    height: 55px;
  }
  
  h5 {
    margin: 0;
    cursor: pointer;
  }
`;
export const CoverPhotoWrapper = styled.div<{photoSrc?: string}>`
  background: linear-gradient(to top, rgba(9, 41, 92, 0.7), rgba(49, 57, 97, 0.7), rgba(73, 74, 102, 0.7), rgba(94, 93, 108, 0.7), #717171cc),
  url(${({photoSrc}) => photoSrc}) no-repeat center center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 22px 14px;
  border-radius: 6px 0 0 4px;

  h4, p {
    margin: 0;
    color: #fff;
  }
`;


export const Metadata = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
  font-size: 1.2rem;
  
  span {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    
    &:first-child {
      color: ${colors.mutedParagraph};
    }
  }

  img {
    border-radius: 100px;
    height: 20px;
    width: 20px;
  }
`;
