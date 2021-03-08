import React from "react";
import styled from "styled-components";

const Element = styled.li`
  width: 70%;
  margin: 2em auto;
  padding: 17px 20px;
  box-sizing: border-box;
  background-color: white;
  min-height: 100px;
  border-radius: 3px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  color: grey;
  margin-bottom: 20px;
`;

const ListElement = ({ msg, author, date }) => (
  <Element>
    <Header>
      <span>{author}</span>
      <span>{date}</span>
    </Header>
    <p>{msg}</p>
  </Element>
);

export default ListElement;
