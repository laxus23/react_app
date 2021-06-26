import { createGlobalStyle } from 'styled-components';
import { colors, media } from 'styles';

const GlobalStyle = createGlobalStyle`
  
  //fonts
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

  html {
    font-size: 9px;
  }
  
  body {
    margin: 0;
    padding: 128px 0 0 0;
    background-color: ${colors.background};
    font-size: 1.5rem;
    font-family: 'Lato', sans-serif;

    ${media.sm} {
      padding: 64px 0 0 0;
    }
  }
  
  * {
    box-sizing: border-box;
  }
  
  a, a:link {
      color: ${colors.link};
      text-decoration: none;
      position: relative;
  }
  
  h2 {
      font-size: 2rem;
      color: ${colors.accentLight};
  }
  
  p {
      color: ${colors.paragraph};
  }
  
  hr {
      margin-bottom: 20px;
      border: 0;
      height: 1px;
      width: 100%;
      background-color: ${colors.mutedMedium};
  }
`;

export default GlobalStyle;
