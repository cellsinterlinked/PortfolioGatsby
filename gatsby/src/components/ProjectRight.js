import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import '../pages/Page.css';
import LeftArrow from './LeftArrow';

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

const RoundButtonStyles = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 10rem;
  transition: 1s ease;
  background: teal;
  color: white;
  box-shadow: 8px 8px 14px black;
  border-radius: 1rem;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
  text-decoration: none;
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
  border-radius: 1.5rem;

  background: linear-gradient(30deg, rgb(7, 7, 7) 2%, rgb(44, 44, 44) 100%);

  padding: 1rem;
  transition: 1s ease;
  transition-delay: 100;
  @media (max-width: 700px) {
    width: 90vw;
    height: 80vw;
  }
`;

const DescriptionText = styled.p`
  font-size: 1.7rem;
  margin: 1rem;
  font-weight: bold;
  color: teal;
  letter-spacing: 1px;
  max-width: 40rem;
  // text-align: center;
  @media (max-width: 700px) {
    font-size: 1.3rem;
    color: teal;
  }
`;

const DetailTitle = styled.h1`
  margin: 1rem;
  font-size: 3rem;
  color: white;
`;

const CodeStyles = styled.div`
  @media (max-width: 700px) {
    right: 1rem;
    left: auto;
    top: -7rem;
    height: 10rem;
    width: 10rem;
  }

  z-index: 30;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -10rem;
  left: 40rem;
  position: absolute;
  height: 15rem;
  width: 15rem;
  border-radius: 1rem;
  background: linear-gradient(30deg, rgb(7, 7, 7) 2%, rgb(44, 44, 44) 100%);
  box-shadow: 5px -3px 12px rgba(0, 0, 0, 0.472);
  transition: 1.4s ease;
  // transition-delay: 2000;
  &:hover {
    ${RoundButtonStyles} {
      background: rgb(0, 87, 87);
      color: white;
      box-shadow: 4px 4px 8px black;
      text-decoration: none;
    }
  }
`;

const Code2Styles = styled.div`
  @media (max-width: 700px) {
    right: 12rem;
    left: auto;
    top: -7rem;
    height: 10rem;
    width: 10rem;
  }

  z-index: 30;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -10rem;
  left: 24rem;
  position: absolute;
  height: 15rem;
  width: 15rem;
  border-radius: 1rem;
  background: linear-gradient(30deg, rgb(7, 7, 7) 2%, rgb(44, 44, 44) 100%);
  box-shadow: 5px -3px 12px rgba(0, 0, 0, 0.472);
  transition: 1.4s ease;
  // transition-delay: 2000;
  &:hover {
    ${RoundButtonStyles} {
      background: rgb(0, 87, 87);
      color: white;
      box-shadow: 4px 4px 8px black;
      text-decoration: none;
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
  border-radius: 1rem;
  background: linear-gradient(30deg, rgb(7, 7, 7) 2%, rgb(44, 44, 44) 100%);
  box-shadow: 5px -3px 12px rgba(0, 0, 0, 0.472);
  transition: 1.4s ease;
  &:hover {
    ${RoundButtonStyles} {
      background: rgb(0, 87, 87);
      box-shadow: none;
      color: white;
      box-shadow: none;
      text-decoration: none;

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
  siteArr,
  gitArr,
}) {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
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
          <RoundButtonStyles
            href={gitArr.front}
            target="_blank"
            rel="noopener noreferrer"
          >
            SEE THE CODE
            <br />
            (FRONT-END)
          </RoundButtonStyles>
        </CodeStyles>
        {gitArr && gitArr.back && (
          <Code2Styles
            className={inView ? 'secondBubbleVisible' : 'secondBubbleHidden'}
          >
            <RoundButtonStyles
              href={gitArr.back}
              target="_blank"
              rel="noopener noreferrer"
            >
              SEE THE CODE
              <br />
              (BACK-END)
            </RoundButtonStyles>
          </Code2Styles>
        )}
        <LiveStyles
          className={inView ? 'secondBubbleVisible' : 'secondBubbleHidden'}
        >
          <RoundButtonStyles
            href={siteArr}
            target="_blank"
            rel="noopener noreferrer"
          >
            SEE IT LIVE
            {/* <AnimStyles /> */}
          </RoundButtonStyles>
        </LiveStyles>
      </ContainerStyles>
      {/* <LeftArrow
        title="BACK"
        className={inView ? 'descBubbleVisible' : 'deskBubbleHidden'}
        scroll={scroll}
      /> */}
    </SectionStyles>
  );
}
