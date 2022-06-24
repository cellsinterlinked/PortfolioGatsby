import React from 'react';
import styled, { keyframes } from 'styled-components';

const OrbAnimation = keyframes`
0% {opacity: 1; }
50% {opacity: 0.2;}
100% {opacity: 1;}
`;

const ParallaxStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  transform-style: preserve-3d;
  z-index: -1;
  scroll-snap-align: start;
  // border: 2px solid blue;
`;

const Orb1Style = styled.div`
  position: absolute;
  top: 15vh;
  left: -20vw;
  height: 18vw;
  width: 18vw;
  padding: 4px;
  border-radius: 50%;
  z-index: -1;
  transform: translateZ(-10px);
  background: linear-gradient(
    30deg,
    rgba(117, 41, 73, 0.014) 2%,
    rgba(170, 46, 98, 0.5) 100%
  );
  animation-name: ${OrbAnimation};
  animation-duration: 7s;
  animation-iteration-count: infinite;
  animation-delay: 0s;
`;

const Orb2Style = styled.div`
  position: absolute;
  top: 30vh;
  left: 50vw;
  height: 12vw;
  width: 12vw;
  padding: 4px;
  border-radius: 50%;
  z-index: -1;
  transform: translateZ(-20px);
  background: linear-gradient(
    30deg,
    rgba(117, 41, 73, 0.014) 2%,
    rgba(170, 46, 98, 0.5) 100%
  );
  animation-name: ${OrbAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-delay: 1s;
`;

const Orb3Style = styled.div`
  position: absolute;
  top: -40vh;
  left: 90vw;
  height: 12vw;
  width: 12vw;
  padding: 4px;
  border-radius: 50%;
  z-index: -1;
  transform: translateZ(-15px);
  background: linear-gradient(
    30deg,
    rgba(117, 41, 73, 0.014) 2%,
    rgba(170, 46, 98, 0.5) 100%
  );
  animation-name: ${OrbAnimation};
  animation-duration: 9s;
  animation-iteration-count: infinite;
  animation-delay: 0.5s;
`;

const Orb4Style = styled.div`
  position: absolute;
  top: 88vh;
  left: 140vw;
  height: 24vw;
  width: 24vw;
  padding: 4px;
  border-radius: 50%;
  z-index: -1;
  transform: translateZ(-25px);
  background: linear-gradient(
    30deg,
    rgba(117, 41, 73, 0.014) 2%,
    rgba(170, 46, 98, 0.5) 100%
  );
  animation-name: ${OrbAnimation};
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-delay: 1.3s;
`;

export default function Head() {
  return (
    <ParallaxStyle>
      <Orb1Style />
      <Orb2Style />
      <Orb4Style />
      <Orb3Style />

      <p>This is the head</p>
    </ParallaxStyle>
  );
}
