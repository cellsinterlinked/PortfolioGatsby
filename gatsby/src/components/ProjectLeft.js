import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import '../pages/Page.css';
import Img from 'gatsby-image';
import RightArrow from './RightArrow';

const SectionStyles = styled.div`
  position: relative;
  flex: none;
  width: 100vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  scroll-snap-align: start;
`;

const FeatBubbleStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 50rem;
  box-shadow: 10px -6px 12px rgba(0, 0, 0, 0.572);
  height: 50rem;
  border-radius: 1rem;
  // background: linear-gradient(
  //   30deg,
  //   rgba(117, 41, 73, 0.014) 2%,
  //   rgba(170, 46, 98, 0.5) 100%
  // );
  background: linear-gradient(30deg, rgb(7, 7, 7) 2%, rgb(44, 44, 44) 100%);
  padding: 1rem;
  transition: 1s ease;
  transition-delay: 100;
  @media (max-width: 700px) {
    width: 90vw;
    height: 90vw;
  }
`;

const FeaturesStyle = styled.div`
  font-size: 1.7rem;
  margin: 1rem;
  font-weight: bold;
  color: white;
  letter-spacing: 1px;
  max-width: 40rem;
  // text-align: center;
  // list-style-type: none;
  p {
    margin-bottom: 4px;
    margin-top: 4px;
    font-size: 1.7rem;
    color: teal;
    @media (max-width: 700px) {
      font-size: 1.3rem;
      color: teal;
    }
  }
`;

const BubbleStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // overflow: hidden;
  position: absolute;
  height: 10rem;
  width: 10rem;
  border-radius: 1rem;
  z-index: 50;
  // background: linear-gradient(
  //   30deg,
  //   rgba(117, 41, 73, 0.014) 2%,
  //   rgba(170, 46, 98, 0.5) 100%
  // );
  background: linear-gradient(30deg, rgb(7, 7, 7) 2%, rgb(44, 44, 44) 100%);
  box-shadow: 5px -3px 12px rgba(0, 0, 0, 0.472);
  transition: 1.4s ease;
  @media (min-width: 701px) {
    &:nth-child(1) {
      top: -3.5rem;
      left: -1rem;
    }
    &:nth-child(2) {
      top: 7.5rem;
      left: -9rem;
    }
    &:nth-child(3) {
      top: 21rem;
      right: 54rem;
    }
    &:nth-child(4) {
      bottom: 7.5rem;
      left: -9rem;
    }
    &:nth-child(5) {
      bottom: -3.5rem;
      left: -1rem;
    }
  }
  @media (max-width: 700px) {
    &:nth-child(1) {
      top: -7rem;
      right: 1rem;
    }
    &:nth-child(2) {
      top: -12rem;
      left: calc(50vw - 5.7rem);
    }
    &:nth-child(3) {
      top: -7rem;
      left: 1rem;
    }
    &:nth-child(4) {
      bottom: -7rem;
      left: 1rem;
    }
    &:nth-child(5) {
      bottom: -7rem;
      right: 1rem;
    }
  }
`;

const DetailTitle = styled.h1`
  margin: 1rem;
  font-size: 3rem;
  color: white;
`;

const ContainerStyles = styled.div`
  border-radius: 50%;
  position: relative;
`;

export default function ProjectLeft({ features, technologies, scroll }) {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  return (
    <SectionStyles>
      <ContainerStyles>
        {technologies.map((technology, index) => (
          <BubbleStyles
            // key={index}
            className={
              inView ? 'featureBubbleVisible orb' : 'featureBubbleHidden orb'
            }
          >
            <span style={{ height: 'auto', width: '70px' }}>
              <Img fluid={technology.image.asset.fluid} alt={technology.name} />
            </span>
          </BubbleStyles>
        ))}

        <FeatBubbleStyles
          ref={ref}
          className={inView ? 'featureBubbleVisible' : 'featureBubbleHidden'}
        >
          <DetailTitle>FEATURES</DetailTitle>
          <FeaturesStyle>
            {features.map((feature, index) => (
              <p key={index}>&#x2022; {feature.feature}</p>
            ))}
          </FeaturesStyle>
        </FeatBubbleStyles>
      </ContainerStyles>
      {/* <RightArrow title="BACK" scroll={scroll} /> */}
    </SectionStyles>
  );
}
