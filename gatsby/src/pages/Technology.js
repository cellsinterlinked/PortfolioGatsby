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
import gatsbylogo from '../../Resources/gatsbylogo.png';
import './Page.css';
import Squares2 from '../components/Background/Squares2';

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
    padding-top: 0rem;
  }
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
  @media (max-width: 700px) {
    height: 6rem;
    width: auto;
  }
`;

const ObserverStyles = styled.div`
  height: 12rem;
  width: 12rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // transform: translateY(100px);
  // opacity: 0;
  transition: 300ms;
  margin: 1.5rem;
  color: white;
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
    height: 10rem;
    width: 10rem;
  }
`;

const TechHeaderStyles = styled.h1`
color: white;
font-size: 30px;
font-weight: 900;
margin-bottom: 20px;
text-align: center;
max-width: 40rem;
@media(max-width: 900px) {
  margin-bottom: 40px;
  max-width: 30rem;
  font-size: 25px;
}
}
`;

export default function Technology(props) {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  });

  return (
    <TechStyles id="technology">
      <TechHeaderStyles>The Technologies I Work With</TechHeaderStyles>
      <Squares2 />
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
          React/ReactNative
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

        <ObserverStyles
          ref={ref}
          className={inView ? 'observerShow' : 'observer'}
        >
          Gatsby
          <IconStyles src={gatsbylogo} alt="" />
        </ObserverStyles>
      </ContainerStyles>
    </TechStyles>
  );
}
