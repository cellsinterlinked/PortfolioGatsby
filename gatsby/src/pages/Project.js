import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import './Page.css';
import ProjectRight from '../components/ProjectRight';
import ProjectLeft from '../components/ProjectLeft';
import ProjectCenter from '../components/ProjectCenter';
import Squares1 from '../components/Background/Squares1';
import Squares2 from '../components/Background/Squares2';
import Squares3 from '../components/Background/Squares3';
import Squares4 from '../components/Background/Squares4';

const ProjectStyles = styled.section`
  scroll-behavior: smooth;
  height: 100vh;
  width: 100vw;
  // overflow-x: scroll;
  // scroll-snap-type: x mandatory;
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  justify-content: flex-start;
  align-items: center;
  // overflow-y: hidden;
  scroll-snap-align: start;
  transform-style: preserve-3d;
  z-index: -1;
  transition: 500ms;
`;

const NavigatorStyles = styled.div`
  width: 100%;
  max-width: 54rem;
  height: auto;
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  margin-top: 3rem;
  height: 6rem;
`;

const OrbFloatStyles = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 300ms ease;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background: linear-gradient(
    30deg,
    rgba(0, 172, 172, 0.1) 2%,
    rgb(0, 172, 172, 1) 100%
  );
  top: -3rem;
  // left: calc(50% - 1.5rem);
  @media (max-width: 700px) {
    top: -2rem;
  }
`;

const TransStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.2rem;
  width: 16rem;
  // border-bottom: 1px solid rgb(0, 172, 172);
  padding: 0.5rem;
  padding-top: 0.8rem;
  font-weight: bold;
  letter-spacing: 2px;
  // border-radius: 10px;
  cursor: pointer;
  transition: 200ms ease;
  @media (max-width: 800px) {
    font-size: 1.5rem;
    width: 28vw;
  }
  @media (max-width: 390px) {
    font-size: 1.3rem;
  }
`;

const orbLeft = {
  left: 'calc(16.5% - 1.5rem)',
};

const orbCenter = {
  left: 'calc(50% - 1.5rem)',
};

const orbRight = {
  left: 'calc(83.3% - 1.5rem)',
};

const select = {
  color: 'white',
  borderBottom: '1px solid  rgb(0, 172, 172)',
  transition: '200ms ease',
};

const none = {
  color: 'grey',
  borderBottom: '1px solid grey',
  transition: '200ms ease',
};

export default function Project({
  index,
  title,
  description,
  liveLink,
  codeLink,
  technologies,
  features,
  image,
}) {
  const ref = useRef();

  const [display, setDisplay] = useState('center');
  const backArr = [<Squares1 />, <Squares2 />, <Squares3 />, <Squares4 />];
  const urlArr = [
    'https://res.cloudinary.com/dbnapmpvm/video/upload/v1666199004/Portfolio/ACM_vnpou9.mp4',
    'https://res.cloudinary.com/dbnapmpvm/video/upload/v1666199035/Portfolio/Coach_Console_tyokfh.mp4',
    'https://res.cloudinary.com/dbnapmpvm/video/upload/v1666199047/Portfolio/Tabletop_Assistant_awdaqe.mp4',
    'https://res.cloudinary.com/dbnapmpvm/video/upload/v1666199016/Portfolio/Non-Urgent_r7ueev.mp4',
  ];

  return (
    <ProjectStyles ref={ref}>
      {backArr[index]}
      <NavigatorStyles>
        <OrbFloatStyles
          style={
            display === 'center'
              ? orbCenter
              : display === 'left'
              ? orbLeft
              : orbRight
          }
        />
        <TransStyles
          style={display === 'left' ? select : none}
          onClick={() => setDisplay('left')}
        >
          FEATURES
        </TransStyles>
        <TransStyles
          style={display === 'center' ? select : none}
          onClick={() => setDisplay('center')}
        >
          VIDEO DEMO
        </TransStyles>
        <TransStyles
          style={display === 'right' ? select : none}
          onClick={() => setDisplay('right')}
        >
          DESCRIPTION
        </TransStyles>
      </NavigatorStyles>
      {display === 'left' && (
        <ProjectLeft
          features={features}
          technologies={technologies}
          // scroll={scroll}
        />
      )}
      {display === 'center' && (
        <ProjectCenter
          video={urlArr[index]}
          title={title}
          // scroll={scroll}
          image={image}
        />
      )}
      {display === 'right' && (
        <ProjectRight
          description={description}
          codeLink={codeLink}
          liveLink={liveLink}
          // scroll={scroll}
        />
      )}
    </ProjectStyles>
  );
}
