import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  user-select: none;
  
  ul {
    width: 100%;
    justify-content: center;
    list-style: none;
    display: flex;
    column-gap: 15px;
    a {
      cursor: pointer
    }
    
    li.selected {
      font-weight: 600;
    }
  }
`;