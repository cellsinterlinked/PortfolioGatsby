import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
  --red: FF4949;
}

html {
  font-size: 10px;
  // background-image: linear-gradient(315deg, black 20%,  rgb(28, 28, 28) 50%, rgb(48, 48, 48) 70%, rgb(64, 64, 64) 80%, rgb(84, 84, 84) 100%);
  background: black;
  scroll-behavior: smooth;
}





`;

export default GlobalStyles;
