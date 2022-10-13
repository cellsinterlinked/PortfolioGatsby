import React from 'react';
import styled, { keyframes } from 'styled-components';

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
  @media(max-width: 900px) {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    bottom: 30%;
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
      background: teal;
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
    background: teal;
  }
}
  ${LinkTextStyle} {
    color: white;
    font-size: 25px;
    text-transform: uppercase;
    transform: rotate(90deg) translateY(40px);
   
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

export default function NextArrow({ title }) {
  return (
    <LinkStyle>
      <ArrowStyle>
        <span />
        <span />
      </ArrowStyle>
      <LinkLineStyle />
      <LinkTextStyle>{title}</LinkTextStyle>
    </LinkStyle>
  );
}
