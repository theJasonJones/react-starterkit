import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

import "./index.css";

const Wrapper = styled.div`
  background: linear-gradient(to bottom, #f6e6b4 0%, #ed9017 100%);
  color: white;
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
  color: white;
  text-shadow: 1px 1px 1px #c1c1c1;
  font-size: 2.5rem;
`;

const App = () => (
  <Wrapper>
    <InnerWrapper>
      <Heading>You can start me up...</Heading>
    </InnerWrapper>
  </Wrapper>
);

ReactDOM.render(<App />, document.getElementById("app"));
