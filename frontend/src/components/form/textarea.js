import styled from "styled-components";

const TextArea = styled.textarea`
  resize: none;
  padding: 10px;
  font-size: 1em;
  border: 2px solid black;
  box-sizing: border-box;
  margin-bottom: 20px;
  min-height: 200px;
  font-weight: 500;
  display: block;
  width: 100%;

  transition: all 200ms;

  &:focus {
    outline: none;
    background-color: #ebf6ff;
  }
`;

export default TextArea;
