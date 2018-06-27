import React from "react";
import styled, { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom";

import theme from "./theme/main";

const Wrapper = styled.div`
  background: linear-gradient(to bottom, #54a3ff 0%, #0066e2 100%);
  height: 100%;
`;

const InnerWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  text-shadow: 1px 1px 3px #000;
`;

const Heading = styled.h1`
  color: ${theme.colors.white};
  text-shadow: 1px 1px 1px ${theme.colors.gray};
  font-size: 2.5rem;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <InnerWrapper>
        <Heading>You can start me up...</Heading>
      </InnerWrapper>
    </Wrapper>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
