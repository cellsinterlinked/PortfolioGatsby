import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import '../pages/Page.css';
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

const RoundButtonStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 10rem;

  background-color: rgba(255, 255, 255, 0.676);
  border-radius: 50%;
  color: grey;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
  box-shadow: 3px -2px 6px rgba(0, 0, 0, 0.472);
  transition: 500ms ease;
  @media (max-width: 700px) {
    left: 1rem;
    height: 7rem;
    width: 7rem;
    font-size: 1rem;
    font-weight: bold;
  }
`;

const DescriptionStyles = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50rem;
  box-shadow: 10px -6px 12px rgba(0, 0, 0, 0.472);
  height: 50rem;
  border-radius: 50%;
  background: linear-gradient(
    30deg,
    rgba(117, 41, 73, 0.014) 2%,
    rgba(170, 46, 98, 0.5) 100%
  );
  padding: 1rem;
  transition: 1s ease;
  transition-delay: 100;
  @media (max-width: 700px) {
    width: 90vw;
    height: 90vw;
  }
`;

const DescriptionText = styled.p`
  font-size: 1.7rem;
  margin: 1rem;
  font-weight: bold;
  color: grey;
  letter-spacing: 1px;
  max-width: 40rem;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 1.3rem;
    color: black;
  }
`;

const DetailTitle = styled.h1`
  margin: 1rem;
  font-size: 3rem;
  color: grey;
`;

const CodeStyles = styled.div`
  @media (max-width: 700px) {
    right: 1rem;
    left: auto;
    top: -7rem;
    height: 10rem;
    width: 10rem;
  }

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -10rem;
  left: 40rem;
  position: absolute;
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  background: linear-gradient(
    30deg,
    rgba(117, 41, 73, 0.014) 2%,
    rgba(170, 46, 98, 0.5) 100%
  );
  box-shadow: 5px -3px 12px rgba(0, 0, 0, 0.472);
  transition: 1.4s ease;
  // transition-delay: 2000;
  &:hover {
    ${RoundButtonStyles} {
      background: linear-gradient(
        30deg,
        rgba(4, 4, 4, 0.08) 2%,
        rgba(0, 0, 0, 1) 100%
      );
      color: white;
      box-shadow: none;
    }
  }
`;

const LiveStyles = styled.div`
@media (max-width: 700px) {
 left: 1rem;
 height: 10rem;
 width: 10rem;
 bottom: -7rem;

}
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: -10rem;
  right: 40rem;
  position: absolute;
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  background: linear-gradient(
    30deg,
    rgba(117, 41, 73, 0.014) 2%,
    rgba(170, 46, 98, 0.5) 100%
  );
  box-shadow: 5px -3px 12px rgba(0, 0, 0, 0.472);
  transition: 1.4s ease;
  // transition-delay: 2000;
  &:hover {
    ${RoundButtonStyles} {
      background: linear-gradient(
        30deg,
        rgba(4, 4, 4, 0.08) 2%,
        rgba(0, 0, 0, 1) 100%
      );
      color: white;
      box-shadow: none;

    }
`;

const ContainerStyles = styled.div`
  border-radius: 50%;
  position: relative;
`;

export default function ProjectRight({
  description,
  codeLink,
  liveLink,
  scroll,
}) {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  return (
    <SectionStyles>
      <ContainerStyles>
        <DescriptionStyles
          ref={ref}
          className={inView ? 'descBubbleVisible' : 'deskBubbleHidden'}
        >
          <DetailTitle>DESCRIPTION</DetailTitle>
          <DescriptionText>{description}</DescriptionText>
        </DescriptionStyles>
        <CodeStyles
          className={inView ? 'secondBubbleVisible' : 'secondBubbleHidden'}
        >
          <RoundButtonStyles>SEE THE CODE</RoundButtonStyles>
        </CodeStyles>
        <LiveStyles
          className={inView ? 'secondBubbleVisible' : 'secondBubbleHidden'}
        >
          <RoundButtonStyles>SEE IT LIVE</RoundButtonStyles>
        </LiveStyles>
      </ContainerStyles>
      <LeftArrow
        title="BACK"
        className={inView ? 'descBubbleVisible' : 'deskBubbleHidden'}
        scroll={scroll}
      />
    </SectionStyles>
  );
}
