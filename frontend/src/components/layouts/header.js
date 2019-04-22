import React from "react";
import styled from "styled-components";
import Logo from "../icons/logo.js";

const Wrapper = styled.div`
  position: fixed;
  max-width: 250px;
  margin: 20px;
`;

const Headline = styled.span`
  font-weight: 600;
  display: inline-block;
  margin-top: 18px;
  margin-left: 20px;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
  display: inline-block;
  margin-left: 20px;

  &:hover {
    color: #ffcc32;
  }
`;

export default () => (
  <Wrapper>
    <Logo />
    <Headline>Air Printer</Headline>
    <Link href="https://github.com/leomuehlfeld" target="blank">
      View on Github
    </Link>
  </Wrapper>
);
