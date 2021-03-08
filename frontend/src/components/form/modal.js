import styled from "styled-components";

const Modal = styled.div`
  width: 50%;
  background-color: white;
  padding: 30px;
  box-sizing: border-box;
  boxshadow: 0px 14px 23px -21px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  @media (max-width: 1500px) {
    width: 65%;
  }

  @media (max-width: 834px) {
    width: 80%;
  }
`;

export default Modal;
