import { createGlobalStyle } from 'styled-components';
import { fontFamily, fontSize, fontWeight } from '@/constants/font';

const GlobalStyle = createGlobalStyle`
  html {  
      box-sizing: border-box;
      font-size: 62.5%;
      font-size:${fontSize(15)};
      line-height: 1.3; //1.6em;
      font-family: 'Noto Sans Lao', sans-serif;
  }
  *,
  *:before,
  *:after {
      box-sizing: inherit;
      margin:0;   
      padding:0;
  }
  body {
    min-height:100vh;
    margin:0;
    color:red;
    font-display: fallback; /* <- this can be added to each @font-face definition */
    font-family: ${fontFamily.primary};
    font-weight:${fontWeight.medium};
    background-color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  //For Next js or Create React app
  #__next, #root {
    display:flex;
    flex-direction:column;
    min-height:100vh;
  }
  
  //Reseting headings
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: blue;
    //font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    margin: 0; // might come from a global reset
  }
  a {
    -webkit-tap-highlight-color: transparent;
    color: blue;
    cursor: pointer;

    :focus{
      outline: 0; // TODO style the outline for web-accessibility
    }
    :focus, 
    :hover {
      color: green;
    }
  }
`;

export default GlobalStyle;
