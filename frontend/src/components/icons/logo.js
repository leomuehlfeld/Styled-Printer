import React from "react";
import styled from "styled-components";

const LogoContainer = styled.svg`
  width: 70px;
  height: 70px;
  fill: black;
  display: inline-block;
  float: left;
`;

const Logo = () => (
  <LogoContainer viewBox="0 0 100 100">
    <g>
      <path
        d="M30,35.8c1.7-5.4,3.6-10.5,5-15.8c0.9-3.3,2.3-6.3,4.1-9.2c1.5-2.4,2.8-4.4,4.6-6.6c1-1.2,2.4-2,4.2-2
		c10.3,0,20.6-0.1,30.9-0.1c3.1,0,6.1,0.6,8.9,1.8c3.8,1.6,5.8,4.4,6,8.4c0.1,1.4-0.1,2.9-0.2,4.3c-0.1,1.2-0.7,2.1-2.1,2.1
		c-4.1,0.1-8.2,0.1-12.3,0.1c-1.9,0-3.9-0.2-5.8-0.2c-0.4,0-1,0.4-1.2,0.8c-2.1,4.5-2.6,9.4-2.5,14.3c0,0.8,0.5,0.8,1.1,0.8
		c6.5,0.2,12.9,0.3,19.4,0.5c1.4,0,2.7,0,4.1,0.1c1.8,0.1,2.7,0.9,2.8,2.6c0.1,1.5-0.1,2.9-0.2,4.4c0,0.5,0,1.1,0,1.6
		c0.1,8.2,0.3,8.6,0.3,16.8c0,3.7-0.1,7.4-0.3,11.1c0,0.6-0.3,1.5-0.7,1.7c-2.2,1.3-3.1,3.7-4.8,5.4c-1.8,1.9-3.8,3.7-5.6,5.5
		c-0.8,0.8-1.6,1.7-2.4,2.5c-0.7,0.7-1.5,1.3-2.2,2.1c-1.2,1.2-2.3,2.5-3.5,3.7c-1.3,1.2-2.6,2.3-4,3.4c-0.4,0.3-0.9,0.3-1.4,0.4
		c-3,0.2-6,0.3-8.9,0.4c-1.6,0-3.1-0.2-4.7-0.2c-1.2,0-2.3,0-3.5,0c-2.6,0.1-5.2,0.1-7.8,0.2c-4.1,0-8.2,0.1-12.3,0
		c-1.4,0-2.8-0.4-4.2-0.5c-2.1-0.1-4.2,0-6.3,0c-4-0.1-8,0.7-12-0.2c-1.2-0.3-2.5,0.2-3.8,0.1c-1.5-0.1-3.1-0.3-4.6-0.7
		c-0.3-0.1-0.6-0.8-0.6-1.2c0-2.7,0.1-5.4,0.1-8.1c0-4.2-0.1-0.5-0.1-4.7c0-3.4,0.2-6.8,0.2-10.1c0-4.7-0.2-9.4-0.3-14.1
		c0-1.1,0.2-2,1.2-2.7C6,53.5,7.5,52.2,9,51c0.5-0.4,0.9-0.9,1.4-1.3c2-1.5,4.1-2.8,5.9-4.5c1.9-1.7,3.5-3.7,5.2-5.6
		c0.5-0.5,0.9-0.9,1.5-1.4c0.3-0.3,0.8-0.4,1-0.7c1.3-2.2,3.2-2.1,5.3-1.8C29.6,35.8,29.9,35.8,30,35.8z M47.3,92.5
		C47.3,92.5,47.3,92.4,47.3,92.5c7.3,0,14.6,0,21.9,0c1.7,0,2.2-0.2,2.3-2.1c0.2-3,0.2,1.8,0.1-1.2c-0.1-4.1-0.5-8.1-0.6-12.2
		c-0.1-2.8,0-5.7,0-8.5c0-2.4,0.2-4.8,0.2-7.2c0-0.8,0-1.3-1-1.6c-2.5-0.8-5.1-0.3-7.6-0.3c-2.3-0.1-4.7,0.1-7,0
		c-2.9-0.1-5.8-0.4-8.7-0.6c-3.7-0.2-7.5-0.2-11.2-0.4c-1.3,0-2.6-0.2-3.9-0.2c-4.1,0.1-8.1,0.4-12.2,0.5c-3.5,0.1-7.1-0.1-10.6-0.1
		c-2.1,0-2.1,0.1-1.9,2.2c0,0.3,0,0.5,0,0.8c-0.1,3.4-0.2,6.8-0.3,10.2c-0.1,1.9-0.2,3.8-0.3,5.6c-0.1,1.7-0.1,3.3-0.2,5
		c-0.1,2.4-0.3,4.7-0.4,7.1c-0.1,3.3,0.1-1.3,0,2c0,0.9,0.2,1.1,1,1.1c1.8-0.1,3.6-0.2,5.4-0.2c4.5,0,9,0.1,13.5,0.1
		C32.9,92.5,40.1,92.5,47.3,92.5z M78,5.2c-0.6,0-1.1,0-1.6,0c-8.4,0-16.9,0.1-25.3,0c-2.1,0-3.7,0.4-5.2,2c-2.7,2.8-4.7,5.4-6.1,9
		c-1.9,5.1-3.6,10.2-5.3,15.4c-0.5,1.6-0.8,3.3-1,4.9c-0.3,1.9-0.4,3.9-0.6,5.9c-0.3,2.7,0.5,3.7,3.2,3.7c8.4,0,16.9,0.1,25.3,0.1
		c0.5,0,1.1,0,1.6,0c1.2-0.2,1.8-0.9,1.8-2.2c0.1-1.8,0.2-3.6,0.5-5.4c0.5-3.7,1.2-7.3,1.5-11C67.6,18.5,71.1,11.5,78,5.2z
		 M94.2,40.8c-0.8,0.6-1.3,1-1.8,1.4C87,46.9,81.5,51.5,76,56.1c-1.1,0.9-1.6,1.9-1.6,3.3c0,3.1,0,6.1,0,9.2c0,8.7,0.1,9.5,0.1,18.2
		c0,1,0.1,2,0.1,3.1c0.9-0.7,1.8-1.3,2.5-2c5-5.1,9.9-10.3,14.8-15.4c1.6-1.6,2.1-3.6,2.1-5.8C94.2,55.6,94.2,52.4,94.2,40.8z
		 M8.9,54.7c1.3,0.1,2.2,0.2,3.1,0.2c3.8,0,7.5-0.2,11.3-0.1c2.9,0,5.8,0.4,8.7,0.4c3.2,0.1,6.5,0.1,9.8,0c2.9,0,5.9-0.1,8.8-0.1
		c1.4,0,2.7-0.2,4.1-0.2c2.5,0,5,0.1,7.5,0.2c2.1,0,4.2-0.2,6.2,0c2.5,0.3,4.5-0.4,6.3-2.2c2.7-2.5,5.5-5,8.3-7.4
		c2.4-2,4.9-3.8,7.4-5.7c0.3-0.3,0.6-0.6,1.1-1.1c-1,0-1.6-0.1-2.2-0.1c-4.8-0.1-9.7-0.2-14.5-0.4c-1.6,0-3.2-0.1-4.8-0.1
		c-0.3,0-0.9,0.2-0.9,0.4c-0.3,1.9-0.6,3.9-0.9,5.9c1.4,0,2.6,0,3.7,0c1.3,0.1,2.1,0.9,2.1,2c0,1-0.8,1.6-2.2,1.6
		c-2.8,0-5.7,0-8.5,0C53,48,42.9,48,32.7,47.9c-1.9,0-3.9,0-5.8-0.1c-1.2-0.1-2-0.8-1.9-1.7c0.1-1.2,0.9-1.5,1.9-1.6
		c0.9,0,1.8,0,2.7-0.1c0.3,0,0.8-0.3,0.8-0.5c0-1.5-0.2-3.1-0.3-4.5c-1.6-0.4-2.8-0.3-3.9,1c-1,1.3-2.2,2.5-3.4,3.5
		c-1.2,1-2.6,1.9-3.8,2.8c-1.8,1.4-3.5,2.9-5.2,4.3C12.3,52.3,10.7,53.3,8.9,54.7z M75.1,15c2.6,0.1,5.2,0.3,7.8,0.4
		c1,0,2.1,0,3.1,0.1c1.4,0.1,2.2-0.2,2.9-1.5c1.2-2.4-0.4-5.4-3-6.3c-4.2-1.5-7.6,0.4-9.1,3.3C76.3,12.2,75.8,13.4,75.1,15z"
      />
      <path
        d="M20.9,68.5c-0.1,1.8-1,3.2-2.4,4.4c-0.3,0.2-0.6,0.3-0.9,0.4c-1.2,0.3-3.8-0.9-4.6-2.1c-0.5-0.6-0.4-3.6,0.3-4.1
		c1.4-1,3-2,4.6-2.4C19.7,64.3,21.1,66.3,20.9,68.5z"
      />
      <path
        d="M17,78.2c2.2-0.6,4.3,1.2,3.5,3.9c-0.5,1.8-1.1,3.3-3,4c0,0-0.1,0.1-0.1,0.1c-2,0.7-3.2-0.9-4.6-1.8
		c-0.5-0.3-0.7-1.8-0.5-2.6c0.2-1.4,0.9-2.6,2.3-3.2c0.4-0.2,0.7-0.4,1.2-0.4S16.7,78.3,17,78.2z"
      />
      <path
        d="M47.2,16.6c1-0.1,2,0.2,2.9,1.4c0.8,1.2,2.2,0.4,3.3,0.2c1-0.2,1.9-0.8,2.9-1.1c0.5-0.1,1.4,0,1.7,0.3
		c0.8,0.9,1.6,1.5,2.8,1.3c0.3,0,0.7,0.1,0.9,0.3c0.2,0.1,0.4,0.5,0.3,0.7c-0.1,0.3-0.4,0.7-0.6,0.7c-0.9,0.1-1.9,0.3-2.9,0.2
		c-0.4,0-0.9-0.3-1.1-0.7c-0.6-1-1.2-0.7-2.1-0.4c-1.7,0.4-3.5,0.6-5.2,0.8c-0.4,0-0.9-0.4-1.2-0.8c-0.5-0.4-0.9-1.3-1.3-1.3
		c-1.1,0-2.3,0.4-3.4,0.7c-0.5,0.2-0.9,0.7-1.4,0.8c-0.3,0.1-0.9,0.1-1.2-0.3c-0.3-0.4,0.1-0.8,0.3-1C43.1,17.3,44.6,16.7,47.2,16.6
		z"
      />
      <path
        d="M59.8,14.2c-2.1,0.2-4,0-5.6-1.6c-0.2-0.2-1.1,0-1.5,0.1c-1.6,0.6-3.1,1-4.6-0.4c-0.2-0.2-0.9,0-1.4,0.1
		c-0.3,0.1-0.5,0.4-0.7,0.5c-0.6,0.1-1.4,0.5-1.8,0.1s0.5-1.3,0.9-1.6c1.4-0.7,2.8-1.7,4.6-0.3c0.5,0.4,2,0,2.9-0.4
		c1.2-0.5,2.1-0.7,2.9,0.6c0.1,0.2,0.4,0.3,0.6,0.5c1.7,1,5.6,0.8,7.1-0.3c0.7-0.5,1.3-0.7,1.9,0c0.6,0.7,0,1-0.5,1.6
		C63.1,14.7,61.4,14.2,59.8,14.2z"
      />
      <path
        d="M45.8,26.6c0.9,0,1-0.2,1.4-0.3c0.3-0.1,0.6-0.4,0.6-0.6c0-0.3-0.3-0.7-0.5-0.8c-2-0.5-3.9-1.9-6.1-0.8
		c-0.6,0.3-1.3,0.5-1,1.3c0.3,0.7,1,0.8,1.7,0.4c0.9-0.5,1.8-0.3,2.6,0.2C44.5,26,45.2,26.6,45.8,26.6z"
      />
    </g>
  </LogoContainer>
);

export default Logo; 