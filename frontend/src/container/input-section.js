import styled from "styled-components";

const InputSection = styled.div`
  width: 50vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f5f5f5;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 65vw;
  }

  @media (max-width: 900px) {
    width: 100%;
    position: relative; 
  }
`;

export default InputSection;
