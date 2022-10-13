import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../pages/Page.css';
import Img from 'gatsby-image';
import styled, { keyframes } from 'styled-components';

const MobileContainerStyles = styled.div`
position: absolute;
left: auto;
top: auto;
right: auto;
bottom: auto;
width: 90vw;
max-width: 2400px;
overflow: visible;
display: flex;
align-items: flex-start;
justify-content: center;
// border: 1px solid black;
flex-direction: row;
@media (min-width: 901px) {
  display: none;
}
@media (max-width: 900px) {
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
max-height: 200vh;
//   height: 100vh;
}
span {
  color: transparent;
  transition: 500ms;
  height: auto;
  border-radius: 1rem;
  overflow: hidden;

  
  @media (max-width: 900px) {
    &:nth-child(1) {
     
      width: 30vw;
    
      transition-delay: 150ms;
      margin-left: 1vw;
      margin-right: 1vw;
    }
    &:nth-child(2) {
      width: 30vw;
    
      transition-delay: 300ms;
      margin-left: 1vw;
      margin-right: 1vw;

    }
    &:nth-child(3) {
      width: 60vw;
    
      transition-delay: 450ms;
      margin-left: 1vw;
      margin-right: 1vw;

    }
    &:nth-child(4) {
      width: 60vw;
   
    
      transition-delay: 600ms;
      margin-left: 1vw;
      margin-right: 1vw;

    }
}

`;

export default function MobileDisp({ projects }) {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  return projects ? (
    <MobileContainerStyles>
      <span
        ref={ref}
        className={inView ? 'featureBubbleVisible' : 'featureBubbleHidden'}
      >
        <Img fluid={projects[3].leftimage.asset.fluid} alt={projects[3].name} />
      </span>
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
        <Img fluid={projects[2].leftimage.asset.fluid} alt={projects[2].name} />
      </span>
      <span
        ref={ref}
        className={inView ? 'featureBubbleVisible' : 'featureBubbleHidden'}
      >
        <Img fluid={projects[0].leftimage.asset.fluid} alt={projects[0].name} />
      </span>
    </MobileContainerStyles>
  ) : null;
}
