import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html{
    width: 100%;
    overflow-x: inherit;
  }

  body
  {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }
  
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  #__next {
    width: 100%;
  }
`;
