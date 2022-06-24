import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Page.css';
import Img from 'gatsby-image';

import styled, { keyframes } from 'styled-components';

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

const OrbAnimation = keyframes`
0% {opacity: 1; }
50% {opacity: 0.2;}
100% {opacity: 1;}
`;

const Orb1Style = styled.div`
  position: absolute;
  top: 60vh;
  left: -50vw;
  height: 6vw;
  width: 6vw;
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
  animation-duration: 7s;
  animation-iteration-count: infinite;
  animation-delay: 0s;
`;

const Orb2Style = styled.div`
  position: absolute;
  top: 80vh;
  left: 10vw;
  height: 12vw;
  width: 12vw;
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
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-delay: 1s;
`;

const Orb3Style = styled.div`
  position: absolute;
  top: 40vh;
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
  transform: translateZ(-12px);
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

const PrevContainerStyles = styled.div`
  position: absolute;
  left: auto;
  top: auto;
  right: auto;
  bottom: auto;
  width: 790px;
  height: 60rem;
  overflow: visible;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  // border: 1px solid black;
  flex-direction: row;
  @media (max-width: 700px) {
    width: 100vw;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    // height: 100vh;
    margin-top: 10vh;
  }
  span {
    color: transparent;
    transition: 500ms;
    height: auto;
    width: 14rem;
    border-radius: 1rem;
    overflow: hidden;

    @media (max-width: 700px) {
      width: 15rem;
      height: auto;
      &:nth-child(1) {
        transform: rotate(-5deg);
        margin-right: 3rem;
        transition-delay: 150ms;
        margin-bottom: 12rem;
        mex-height: 15rem;
      }
      &:nth-child(2) {
        transform: rotate(5deg);
        transition-delay: 300ms;
        margin-left: 3rem;
        margin-bottom: 12rem;
      }
      &:nth-child(3) {
        transform: rotate(5deg);
        transition-delay: 450ms;
        margin-right: 2rem;
        margin-bottom: 8rem;
        width: 18rem;
        height: 10rem
      }
      &:nth-child(4) {
        transform: rotate(-5deg);
        margin-left: 2rem;
        transition-delay: 600ms;
        margin-bottom: 8rem;
        width: 18rem;
        height: 10rem;
    }

  }
  @media(min-width: 701px) {
    &:nth-child(1) {
      transform: rotate(-30deg);
      margin-top: 7rem;
      transition-delay: 150ms;
    }
    &:nth-child(2) {
      transform: rotate(-10deg);
      transition-delay: 300ms;
    }
    &:nth-child(3) {
      transform: rotate(10deg);
      transition-delay: 450ms;

    }
    &:nth-child(4) {
      transform: rotate(30deg);
      margin-top: 7rem;
      transition-delay: 600ms;

    }
  }
`;
const ArrowStyle = styled.span``;

const LinkLineStyle = styled.span``;

const LinkTextStyle = styled.span``;

const AnimationLine = keyframes`
0% {
  left: 80px;
}

100% {
  left: 0;
}

`;

const AnimationArrow = keyframes`
0% {
  width: 0;
}

100% {
  width: 100%;
}
`;

const LinkStyle = styled.a`
  // position: absolute;
  // left: 0;
  // right: 0;
  // margin-left: auto;
  // margin-right: auto;
  // top: -30rem;
  display: inline-flex;
  align-items: center;
  padding: 5px;
  text-decoration: none;
  transform: rotate(-90deg) translate3d(0px, 0, 0);
  @media(max-width: 700px) {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 50rem;
  }
  ${ArrowStyle} {
    display: inline-flex;

    span {
      position: relative;
      width: 14px;
      height: 2px;
      border-radius: 2px;
      overflow: hidden;
      background: #bebdbe;
      z-index: 2;
      &:nth-child(1) {
        transform-origin: left bottom;
        transform: rotate(45deg) translate3d(8px, -10px, 0);
      }

      &:nth-child(2) {
        transform-origin: left bottom;
        transform: rotate(-45deg);
      }
      &:after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      width: 0;
      height: 2px;
      background: #c3002f;
    }
  }
  };
  ${LinkLineStyle} {
    position: relative;
  margin-left: -14px;
  margin-right: 30px;
  width: 150px;
  height: 2px;
  background: #bebdbe;
  overflow: hidden;
  z-index: 1;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 80px;
    width: 70px;
    height: 2px;
    background: #c3002f;
  }
}
  ${LinkTextStyle} {
    color: #4A4A4A;
    font-size: 25px;
    text-transform: uppercase;
    transform: rotate(90deg);
    font-weight: bold;
    @media(max-width: 700px) {
      // margin-left: 19rem;
    }
  }
  &:hover {
  ${LinkLineStyle} {
    &:after {
      animation: ${AnimationLine} 1.5s forwards;
    }
  }
  ${ArrowStyle} {
    span {
      &:after {
        animation: ${AnimationArrow} 1.5s forwards;
        animation-delay: 1s;
      }


  }
  }
`;

export default function ProjectIntro({ projects }) {
  console.log('intro image', projects[0].leftimage.asset.fluid);
  console.log('projects', projects);
  const { ref, inView } = useInView({
    threshold: 1,
  });
  return (
    <IntroStyles>
      <Orb1Style />
      <Orb2Style />
      <Orb4Style />
      <Orb3Style />
      <PrevContainerStyles>
        {/* {projects.map((project, index) => (
          <span
            ref={ref}
            className={inView ? 'featureBubbleVisible' : 'featureBubbleHidden'}
          >
            <Img fluid={project.leftimage.asset.fluid} alt={project.name} />
          </span>
        ))} */}
        <span
          ref={ref}
          className={inView ? 'featureBubbleVisible' : 'featureBubbleHidden'}
        >
          <Img
            fluid={projects[0].leftimage.asset.fluid}
            alt={projects[0].name}
          />
        </span>
        <span
          ref={ref}
          className={inView ? 'featureBubbleVisible' : 'featureBubbleHidden'}
        >
          <Img
            fluid={projects[2].leftimage.asset.fluid}
            alt={projects[2].name}
          />
        </span>
        <span
          ref={ref}
          className={inView ? 'featureBubbleVisible' : 'featureBubbleHidden'}
        >
          <Img
            fluid={projects[1].leftimage.asset.fluid}
            alt={projects[1].name}
          />
        </span>
        <span
          ref={ref}
          className={inView ? 'featureBubbleVisible' : 'featureBubbleHidden'}
        >
          <Img
            fluid={projects[3].leftimage.asset.fluid}
            alt={projects[3].name}
          />
        </span>
      </PrevContainerStyles>
      <LinkStyle>
        <ArrowStyle>
          <span />
          <span />
        </ArrowStyle>
        <LinkLineStyle />
        <LinkTextStyle>Projects</LinkTextStyle>
      </LinkStyle>
    </IntroStyles>
  );
}
