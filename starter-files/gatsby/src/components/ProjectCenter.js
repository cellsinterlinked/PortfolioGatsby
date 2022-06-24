import React, { useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import '../pages/Page.css';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';

const SectionStyles = styled.div`
  position: relative;
  flex: none;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  scroll-snap-align: start;
`;

const TitleStyles = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 1px;
  color: grey;
  font-weight: bold;
`;

const VideoContainerStyles = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 90vw;
  height: auto;
  top: auto;
  bottom: 15rem;
  left: auto;
  right: auto;
  z-index: 1;
`;

const PlayContainerStyles = styled.div`
  position: relative;
  height: 20rem;
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s ease;
`;

const TriangleStyles = styled.div`
  margin-left: 2rem;
  width: 74px;
  height: 74px;
  box-sizing: border-box;
  border-style: solid;
  border-width: 37px 0px 37px 74px;
  border-color: transparent transparent transparent white;
`;

const ButtonContainerStyles = styled.div`
  position: absolute;

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 15rem;
  background: linear-gradient(
    30deg,
    rgba(117, 41, 73, 0.014) 2%,
    rgba(170, 46, 98, 0.5) 100%
  );
  z-index: -1;
`;

const VideoStyles = styled.video`
  height: 80vh;
  margin: auto;
`;

export default function ProjectCenter({ video, title, scroll }) {
  const [playing, setPlaying] = useState(false);

  const playFunc = () => {
    setPlaying(!playing);
  };

  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  return (
    <SectionStyles>
      <LeftArrow title="FEATURES" scroll={scroll} />
      {playing && (
        <VideoContainerStyles>
          <VideoStyles
            controls="controls"
            preload="none"
            autoPlay
            onClick="this.play()"
          >
            <source type="video/webm" src={video} />
          </VideoStyles>
        </VideoContainerStyles>
      )}
      <PlayContainerStyles
        onClick={playFunc}
        ref={ref}
        className={inView ? 'seeArrow' : 'hideArrow'}
      >
        <ButtonContainerStyles>
          <TriangleStyles />
        </ButtonContainerStyles>

        <TitleStyles>{title}</TitleStyles>
      </PlayContainerStyles>
      <RightArrow title="DESCRIPTION" scroll={scroll} />
    </SectionStyles>
  );
}
