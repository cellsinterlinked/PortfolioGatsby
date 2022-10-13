import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import portrait from '../assets/images/Mask group.png';
import Squares1 from '../components/Background/Squares1';

const IntroAnimation = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`;

const IntroAnimation2 = keyframes`
0%{opacity: 0;}
30% {opacity: 0;}
100% {opacity: 100;}
`;

const IntroAnimation3 = keyframes`
0%{opacity: 0;}
50% {opacity: 0;}
100% {opacity: 100;}
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

const IntroContainerStyle = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PortraitFilterStyle = styled.div`
  position: absolute;
  height: 120%;
  width: 100%;
  left: 0;
  top: -20%;
  right: 0;
  bottom: 0;
  background: radial-gradient(#00000000 0%, #000000 60%, #000000 100%);
  z-index: 10;
  @media (max-width: 800px) {
    // width: 200%;
  }
`;

const PortraitFilter2Style = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0
  right: 0;
  bottom: 0;
  background: linear-gradient(to left, #00000000, #00000000 30%,  #000000 80%, #000000 100%  );
  z-index: 11;
  @media (max-width: 800px) {
    // width: 200%
    background: linear-gradient(to left, #00000000, #00000000 70%,  #000000 95%, #000000 100%  );
  }
`;

const PortraitContainerStyle = styled.div`
  position: relative;
  width: 50vw;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: pink;
  // border-radius: 50%;
  overflow: hidden;
  h1 {
    color: white;
  }
  @media (max-width: 800px) {
    justify-content: center;
  }
  animation-name: ${IntroAnimation};
  animation-duration: 6s;
  // animation-iteration-count: infinite;
`;

const PortraitContainerStyle2 = styled.div`
  position: relative;
  width: 50vw;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h1 {
    color: white;
    margin-top: 15%;
    font-size: 9rem;
    font-weight: 900;

    @media (max-width: 800px) {
      font-size: 3.5rem;
    }
    animation-name: ${IntroAnimation2};
    animation-duration: 4s;
  }
  p {
    color: teal;
    font-size: 4rem;
    max-width: 60%;
    @media (max-width: 800px) {
      font-size: 2rem;
      max-width: 90%;
      font-weight: bold;
    }
    animation-name: ${IntroAnimation3};
    animation-duration: 4s;
  }
`;

const PortraitImgStyle = styled.img`
  object-fit: cover;
  width: 65%;
  height: auto;
  height: 100%;
  min-height: 80%;
  filter: grayscale(100%);
  animation-name: ${IntroAnimation}
  animation-duration: 2s;
  animation-iteration-count: 1;
  @media (max-width: 1300px) {
    width: 250%;
    margin-right: 12rem;
    height: auto;
  }
  // @media (max-width: 1400px) {
  //   width: 150%;
  //   margin-right: 12rem;
  //   height: auto;
  // }
  // @media (max-width: 1800px) {
  //   width: 90%;
  //   margin-right: 12rem;
  //   height: auto;
  // }
`;
export default function Head() {
  const say = () => {
    console.log('scrolling');
  };
  console.log(window);

  useEffect(() => {
    document.body.addEventListener('scroll', say);
    return () => {
      document.body.removeEventListener('scroll', say);
    };
  }, []);
  return (
    <ParallaxStyle>
      <IntroContainerStyle id="head">
        {/* <Nav /> */}
        <PortraitContainerStyle>
          <PortraitFilterStyle />
          <PortraitFilter2Style />
          <PortraitImgStyle alt="" src={portrait} />
        </PortraitContainerStyle>
        <PortraitContainerStyle2>
          <h1>Hey There, I'm Scott.</h1>
          <p>I'm a front end developer working primarily with React</p>
          {/* <Cube /> */}
        </PortraitContainerStyle2>
      </IntroContainerStyle>
      <Squares1 />
    </ParallaxStyle>
  );
}
