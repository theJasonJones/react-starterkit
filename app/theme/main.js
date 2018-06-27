/* eslint-disable no-unused-expressions */
import { normalize } from "polished";
import { injectGlobal } from "styled-components";

const baseColors = {
  black: "#000",
  gray: "#4f4f4f",
  white: "#FFFFFF",
};

const theme = {
  fontBody: "'Open Sans', sans-serif",
  colors: {
    ...baseColors,
  },
};

injectGlobal`
  ${normalize()};

  h1, h2, h3, h4, h5 {
    margin: 0;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    height: 100%;
    font-size: 16px;
    color: ${theme.colors.white};
  }

  #app {
    height: 100%;
  }
`;

export default theme;
