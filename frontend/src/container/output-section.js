import styled from "styled-components";

const OutputSection = styled.ul`
  width: 50vw;
  min-height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #191919;
  list-style: none;

  @media (max-width: 1024px) {
    width: 35vw;
  }

  @media (max-width: 900px) {
    width: 100%;
    position: relative; 
  }
`;

export default OutputSection;


// mobileS: '320px',
//   mobileM: '375px',
//   mobileL: '510px',
//   tablet: '834px',
//   laptopS: '900px',
//   laptop: '1024px',
//   desktop: '1440px'