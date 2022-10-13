import React from 'react';
import styled, { keyframes } from 'styled-components';

const OrbAnimation = keyframes`
0% {opacity: 1; }
50% {opacity: 0.2;}
100% {opacity: 1;}
`;

const Orb1Style = styled.div`
  position: absolute;
  top: 40vh;
  left: -10vw;
  height: 18vw;
  width: 18vw;
  padding: 4px;
  border-radius: 5%;
  z-index: -1;
  transform: translateZ(-10px);
  background: linear-gradient(
    30deg,
    rgba(204, 204, 204, 0.014) 2%,
    rgba(76, 76, 76, 0.5) 100%
  );
  animation-name: ${OrbAnimation};
  animation-duration: 7s;
  animation-iteration-count: infinite;
  animation-delay: 0s;
`;

const Orb2Style = styled.div`
  position: absolute;
  top: -40vh;
  left: -80vw;
  height: 12vw;
  width: 12vw;
  padding: 4px;
  border-radius: 5%;
  z-index: -1;
  transform: translateZ(-20px);
  background: linear-gradient(
    30deg,
    rgba(204, 204, 204, 0.014) 2%,
    rgba(76, 76, 76, 0.5) 100%
  );
  animation-name: ${OrbAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-delay: 1s;
`;

const Orb3Style = styled.div`
  position: absolute;
  top: 60vh;
  left: 40vw;
  height: 8vw;
  width: 8vw;
  padding: 4px;
  border-radius: 5%;
  z-index: -1;
  transform: translateZ(-15px);
  background: linear-gradient(
    30deg,
    rgba(204, 204, 204, 0.014) 2%,
    rgba(76, 76, 76, 0.5) 100%
  );
  animation-name: ${OrbAnimation};
  animation-duration: 9s;
  animation-iteration-count: infinite;
  animation-delay: 0.5s;
`;

const Orb4Style = styled.div`
  position: absolute;
  top: 88vh;
  right: -110vw;
  height: 8vw;
  width: 8vw;
  padding: 4px;
  border-radius: 5%;
  z-index: -1;
  transform: translateZ(-25px);
  background: linear-gradient(
    30deg,
    rgba(204, 204, 204, 0.014) 2%,
    rgba(76, 76, 76, 0.5) 100%
  );
  animation-name: ${OrbAnimation};
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-delay: 1.3s;
`;

export default function Squares2() {
  return (
    <>
      <Orb1Style />
      <Orb2Style />
      <Orb4Style />
      <Orb3Style />
    </>
  );
}
