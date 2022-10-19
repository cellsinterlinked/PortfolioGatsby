import React, { useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import '../pages/Page.css';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import Squares2 from './Background/Squares2';

const SectionStyles = styled.div`
  position: relative;
  flex: none;
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: flex-start;
  scroll-snap-align: start;
`;

const TitleStyles = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 1px;
  color: white;

  font-weight: bolder;
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
  @media (max-width: 1200px) {
    width: 25rem;
    top: 0;
    bottom: auto;
  }
  @media (max-width: 500px) {
    top: 5rem;
    bottom: auto;
  }
`;

const PlayContainerStyles = styled.div`
  position: relative;
  height: 20rem;
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s ease;
  cursor: pointer;
`;

const TriangleStyles = styled.div`
  margin-left: 2rem;
  width: 74px;
  height: 74px;
  box-sizing: border-box;
  border-style: solid;
  border-width: 37px 0px 37px 74px;
  border-color: transparent transparent transparent grey;
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
    rgba(0, 172, 172, 0.1) 2%,
    rgb(0, 172, 172, 1) 100%
  );
  backdrop-filter: blur(5px);
  z-index: -1;
`;

const VideoStyles = styled.video`
  height: 74vh;
  margin: auto;
  @media (max-width: 1200px) {
    width: 100vw;
    height: auto;
  }
`;

const BackgroundStyles = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: rem;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  height: 70vh;
  // z-index: -2;
  // overflow: hidden;
  // img {
  //   min-height: 100%;
  //   max-height: 100%;
  //   min-width: 10%;
  //   max-width: 160%;
  //   object-fit: cover;
  //   filter: grayscale(100%);
  //   opacity: 0.5;
  // }
  @media (max-width: 800px) {
    height: 50vh;
  }
`;

const InnerStyles = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  img {
    min-height: 100%;
    max-height: 100%;
    min-width: 10%;
    max-width: 160%;
    object-fit: cover;
    filter: grayscale(100%);
    opacity: 0.5;
  }
`;

const InsaneStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 40;
`;

export default function ProjectCenter({
  video,
  title,
  scroll,
  image,
  background,
}) {
  const [playing, setPlaying] = useState(false);

  const arr = [Squares2];

  const playFunc = () => {
    setPlaying(!playing);
    console.log('i should be playing');
  };

  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  return (
    <SectionStyles>
      {background}
      {/* <LeftArrow title="FEATURES" scroll={scroll} /> */}
      {playing && (
        <VideoContainerStyles>
          <VideoStyles controls="controls" preload="none" onClick="this.play()">
            <source type="video/mp4" src={video} />
          </VideoStyles>
        </VideoContainerStyles>
      )}

      {!playing && (
        <BackgroundStyles>
          <InnerStyles>
            <InsaneStyles>
              <PlayContainerStyles
                ref={ref}
                className={inView ? 'seeArrow' : 'hideArrow'}
                onClick={playFunc}
              >
                <ButtonContainerStyles>
                  <TriangleStyles />
                </ButtonContainerStyles>

                <TitleStyles>{title}</TitleStyles>
              </PlayContainerStyles>
            </InsaneStyles>
            <img src={image} alt="" />
          </InnerStyles>
        </BackgroundStyles>
      )}

      {/* <RightArrow title="DESCRIPTION" scroll={scroll} /> */}
    </SectionStyles>
  );
}
