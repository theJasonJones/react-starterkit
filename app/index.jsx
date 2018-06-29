import React from "react";
import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom";
import InnerWrapper from "./components/atoms/InnerWrapper";
import Wrapper from "./components/atoms/Wrapper";
import Heading from "./components/atoms/Heading";
import theme from "./theme/main";

const App = () => (
  <Wrapper>
    <InnerWrapper>
      <Heading>You can start me up...</Heading>
    </InnerWrapper>
  </Wrapper>
);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("app"),
);
