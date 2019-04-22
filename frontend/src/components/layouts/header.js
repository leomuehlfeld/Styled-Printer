import React from "react";
import styled from "styled-components";
import Logo from "../icons/logo.js";
import Headline from "../typo/headline.js";

const Wrapper = styled.div`
  position: fixed;
`;

export default () => (
  <Wrapper>
    <Logo />
    <Headline>Air Printer</Headline>
  </Wrapper>
);
