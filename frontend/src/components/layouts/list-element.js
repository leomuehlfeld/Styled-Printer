import React from "react";
import styled from "styled-components";

const ListElement = styled.li`
  width: 60%;
  margin: 60px auto;
  padding: 17px 20px;
  box-sizing: border-box;
  background-color: white;
  min-height: 100px;
  border-radius: 4px;
`;

const Marginal = styled.span``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Paragraph = styled.span``;

const Spacer = styled.div`
  width: 100%;
  height: 2px;
  margin: 20px 0;
  background-color: #f5f5f5;
`;

export default ({ msg, author, date }) => (
  <ListElement>
    <Header>
      <Marginal>{author}</Marginal>
      <Marginal>{date}</Marginal>
    </Header>
    <Spacer />
    <Paragraph>{msg}</Paragraph>
  </ListElement>
);
