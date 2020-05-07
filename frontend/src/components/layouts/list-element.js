import React from "react";
import styled from "styled-components";

const ListElement = styled.li`
  width: 70%;
  margin: 60px auto;
  padding: 17px 20px;
  box-sizing: border-box;
  background-color: white;
  min-height: 100px;
  border-radius: 4px;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: grey;
  margin-bottom: 20px;
`;

export default ({ msg, author, date }) => (
  <ListElement>
    <ListHeader>
      <span>{author}</span>
      <span>{date}</span>
    </ListHeader>
    <p>{msg}</p>
  </ListElement>
);
