import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  font-size: 1em;
  border: 2px solid ${props => (props.warning ? "#ffcc32" : "black")}
  color: ${props => (props.warning ? "#ffcc32" : "black")};
  float: right;
  box-sizing: border-box;
  font-weight: 500;
  display: inline;
  width: calc(50% - 10px);
  background-color: white;
  cursor: pointer;

  transition: all 100ms;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(.95);
  }

  &:first-of-type {
    float: left;

  }
`;

export default Button;
