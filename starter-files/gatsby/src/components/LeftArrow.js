import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import '../pages/Page.css';

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
    display: inline-flex;
    align-items: center;
    padding: 5px;
    text-decoration: none;
    transform: rotate(0deg) translate3d(0px, 0, 0);
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
      transform: rotate(0deg);
      font-weight: bold;
      @media(max-width: 700px) {

        position: absolute;
      bottom: 1rem;
       right: 4rem;
        font-size: 18px;
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

const LeftContainerStyle = styled.div`
  position: absolute;
  left: 1rem;
  bottom: 10rem;
  transition: 500ms;
  transition-delay: 500ms;
  @media (max-width: 700px) {
    bottom: 3rem;
    left: 0rem;
  }
`;

export default function Technology({ title, scroll }) {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <LeftContainerStyle
      ref={ref}
      className={inView ? 'seeArrow' : 'hideArrow'}
      onClick={() => scroll(-2000)}
    >
      <LinkStyle>
        <ArrowStyle>
          <span />
          <span />
        </ArrowStyle>
        <LinkLineStyle />
        <LinkTextStyle>{title}</LinkTextStyle>
      </LinkStyle>
    </LeftContainerStyle>
  );
}
