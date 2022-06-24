import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useInView } from 'react-intersection-observer';
import styled, { keyframes } from 'styled-components';
import javascript from '../../Resources/javascript.png';
import css from '../../Resources/css.png';
import angular from '../../Resources/angular.png';
import react from '../../Resources/react.png';
import express from '../../Resources/express.png';
import node from '../../Resources/nodejs.png';
import mongodb from '../../Resources/mongodb.png';
import html from '../../Resources/html.png';
import socketio from '../../Resources/socketio.png';
import './Page.css';

const OrbAnimation = keyframes`
0% {opacity: 1; }
50% {opacity: 0.2;}
100% {opacity: 1;}
`;

const TechStyles = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  flex-direction: column;
  transform-style: preserve-3d;
  z-index: -1;
  @media (max-width: 700px) {
    // justify-content: flex-start;
  }
`;

const Orb1Style = styled.div`
  position: absolute;
  top: 40vh;
  left: -10vw;
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
  top: -40vh;
  left: -80vw;
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
  top: 60vh;
  left: 40vw;
  height: 8vw;
  width: 8vw;
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
  right: -110vw;
  height: 8vw;
  width: 8vw;
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

const ContainerStyles = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 80rem;
  padding-bottom: 3rem;
`;

const IconStyles = styled.img`
  height: 8rem;
  width: auto;
`;

const ObserverStyles = styled.div`
  height: 12rem;
  width: 14rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // transform: translateY(100px);
  // opacity: 0;
  transition: 300ms;
  margin: 1.5rem;
  color: grey;
  font-weight: bold;
  font-size: 1.4rem;
  &:nth-child(2) {
    transition-delay: 100ms;
  }
  &:nth-child(3) {
    transition-delay: 200ms;
  }
  &:nth-child(4) {
    transition-delay: 300ms;
  }
  &:nth-child(5) {
    transition-delay: 400ms;
  }
  &:nth-child(6) {
    transition-delay: 500ms;
  }
  &:nth-child(7) {
    transition-delay: 600ms;
  }
  &:nth-child(8) {
    transition-delay: 700ms;
  }
  &:nth-child(9) {
    transition-delay: 800ms;
  }
  &:nth-child(10) {
    transition-delay: 800ms;
  }
  @media (max-width: 700px) {
    margin: 0.5rem;
  }
`;

const TechHeaderStyles = styled.h1`
color: grey;
font-size: 25px;
font-weight: bold;
margin-bottom: 20px;
}
`;

export default function Technology(props) {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  return (
    <TechStyles>
      <Orb1Style />
      <Orb2Style />
      <Orb4Style />
      <Orb3Style />
      <TechHeaderStyles>The Technologies I Work With</TechHeaderStyles>

      <ContainerStyles>
        <ObserverStyles
          ref={ref}
          className={inView ? 'observerShow' : 'observer'}
        >
          JavaScript
          <IconStyles src={javascript} alt="" />
        </ObserverStyles>
        <ObserverStyles
          ref={ref}
          className={inView ? 'observerShow' : 'observer'}
        >
          CSS
          <IconStyles src={css} alt="" />
        </ObserverStyles>
        <ObserverStyles
          ref={ref}
          className={inView ? 'observerShow' : 'observer'}
        >
          HTML
          <IconStyles src={html} alt="" />
        </ObserverStyles>
        <ObserverStyles
          ref={ref}
          className={inView ? 'observerShow' : 'observer'}
        >
          <IconStyles src={node} alt="" />
        </ObserverStyles>
        <ObserverStyles
          ref={ref}
          className={inView ? 'observerShow' : 'observer'}
        >
          React
          <IconStyles src={react} alt="" />
        </ObserverStyles>
        <ObserverStyles
          ref={ref}
          className={inView ? 'observerShow' : 'observer'}
        >
          <IconStyles src={express} alt="" />
        </ObserverStyles>
        <ObserverStyles
          ref={ref}
          className={inView ? 'observerShow' : 'observer'}
        >
          Angular
          <IconStyles src={angular} alt="" />
        </ObserverStyles>
        <ObserverStyles
          ref={ref}
          className={inView ? 'observerShow' : 'observer'}
        >
          MongoDB
          <IconStyles src={mongodb} alt="" />
        </ObserverStyles>
        <ObserverStyles
          ref={ref}
          className={inView ? 'observerShow' : 'observer'}
        >
          Socketio
          <IconStyles src={socketio} alt="" />
        </ObserverStyles>
      </ContainerStyles>
    </TechStyles>
  );
}
