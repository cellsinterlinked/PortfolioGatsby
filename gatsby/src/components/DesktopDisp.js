import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../pages/Page.css';
import Img from 'gatsby-image';
import styled, { keyframes } from 'styled-components';

const PrevContainerStyles = styled.div`
  position: absolute;
  left: auto;
  top: auto;
  right: auto;
  bottom: auto;
  width: 90vw;
  max-width: 2400px;
  // height: 60rem;
  overflow: visible;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  // border: 1px solid black;
  flex-direction: row;
  @media (max-width: 900px) {
    display: none;
  }
  span {
    color: transparent;
    transition: 500ms;
    height: auto;
    // width: 16vw;
    border-radius: 1rem;
    overflow: hidden;

    

  @media(min-width: 901px) {
    &:nth-child(1) {
      transform: rotate(-20deg);
      width: 13vw;
      margin-top: 7rem;
      transition-delay: 150ms;
      margin-left: 1vw;
      margin-right: 1vw;
    }
    &:nth-child(2) {
      width: 19vw;
      transform: rotate(-10deg);
      transition-delay: 300ms;
      margin-left: 1vw;
      margin-right: 1vw;

    }
    &:nth-child(3) {
      width: 19vw;
      transform: rotate(10deg);
      transition-delay: 450ms;
      margin-left: 1vw;
      margin-right: 1vw;

    }
    &:nth-child(4) {
      width: 13vw;
      transform: rotate(20deg);
      margin-top: 7rem;
      transition-delay: 600ms;
      margin-left: 1vw;
      margin-right: 1vw;

    }
  }
`;

export default function DesktopDisp({ projects }) {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  return projects ? (
    <PrevContainerStyles>
      <span
        ref={ref}
        className={inView ? 'featureBubbleVisible' : 'featureBubbleHidden'}
      >
        <Img fluid={projects[1].leftimage.asset.fluid} alt={projects[1].name} />
      </span>
      <span
        ref={ref}
        className={inView ? 'featureBubbleVisible' : 'featureBubbleHidden'}
      >
        <Img fluid={projects[0].leftimage.asset.fluid} alt={projects[0].name} />
      </span>
      <span
        ref={ref}
        className={inView ? 'featureBubbleVisible' : 'featureBubbleHidden'}
      >
        <Img fluid={projects[2].leftimage.asset.fluid} alt={projects[2].name} />
      </span>
      <span
        ref={ref}
        className={inView ? 'featureBubbleVisible' : 'featureBubbleHidden'}
      >
        <Img fluid={projects[3].leftimage.asset.fluid} alt={projects[3].name} />
      </span>
    </PrevContainerStyles>
  ) : null;
}
