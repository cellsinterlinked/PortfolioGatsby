import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/Montserrat-VariableFont_wght.ttf';
import MetroBold from '../assets/fonts/Metroland Bold.ttf';
import MetroReg from '../assets/fonts/Metroland Regular.ttf';
import MetroLight from '../assets/fonts/Metroland Light.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: Montserrat;
    src: url(${font});
  }
  @font-face {
    font-family: MetroBold;
    src: url(${MetroBold});
  }
  @font-face {
    font-family: MetroReg;
    src: url(${MetroReg});
  }
  @font-face {
    font-family: MetroLight;
    src: url(${MetroLight});
  }
  html {
    font-family: Cleon, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: bold;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }
  .center {
    text-align: center;
  }
  .tilt {
    transform: rotate(-2deg);
  }

  .title {
    font-size: 4rem;
  }
`;

export default Typography;
