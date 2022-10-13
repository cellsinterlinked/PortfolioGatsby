import React from 'react';
import './Page.css';
import styled, { keyframes } from 'styled-components';
import MobileDisp from '../components/MobileDisp';
import DesktopDisp from '../components/DesktopDisp';
import NextArrow from '../components/NextArrow';
import Squares3 from '../components/Background/Squares3';

const IntroStyles = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  flex-direction: column;
  transform-style: preserve-3d;
  overflowY:hidden
  z-index: -1;
  @media(max-width: 700px) {
    justify-content: flex-start
  }
`;

export default function ProjectIntro({ projects }) {
  return (
    <IntroStyles id="projects">
      <Squares3 />
      <MobileDisp projects={projects} />
      <DesktopDisp projects={projects} />
      <NextArrow title="PROJECTS" />
    </IntroStyles>
  );
}
