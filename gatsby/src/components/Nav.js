import React, { useState, useEffect } from 'react';
// import styled from "styled-components";
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';
import Backdrop from './Overlay/Backdrop';
import Drawer from './Overlay/Drawer';
import '../pages/Page.css';

const IntroAnimation4 = keyframes`
0%{opacity: 0;}
70% {opacity: 0;}
100% {opacity: 100;}
`;

const NavStyles = styled.nav`
  top: 0rem;
  left: 0rem;
  right: 0rem;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background: #1a1a1a91;
  backdrop-filter: blur(10px);
  height: 4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  z-index: 50;
  transition: 1s ease;
`;

const NavRightStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  a {
    margin-right: 8rem;
    font-size: 1.8rem;
    letter-spacing: 2px;
    font-weight: normal;
    cursor: pointer;
    color: white;
    text-decoration: none;
  }
  @media (max-width: 800px) {
    display: none;
  }
  animation-name: ${IntroAnimation4};
  animation-duration: 4s;
`;

const NavRightBurger = styled.div`
  margin-right: 1rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 3.6rem;
  width: 4rem;
  animation-name: ${IntroAnimation4};
  animation-duration: 4s;
  @media (min-width: 801px) {
    display: none;
  }
  span {
    &:nth-child(1) {
      width: 100%;
      height: 2px;
      color: white;
      background-color: white;
    }
    &:nth-child(2) {
      width: 100%;
      height: 2px;
      color: white;
      background-color: white;
    }
    &:nth-child(3) {
      width: 100%;
      height: 2px;
      color: white;
      background-color: white;
    }
  }
`;

const NavLeftStyles = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 5rem;

  h1 {
    padding-top: 7px;
    color: teal;
    font-size: 3rem;
    font-weight: 600;
    margin: opx;
  }

  strong {
    font-weight: 900;
    font-size: 5rem;
    color: purple;
    margin-opx;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

const NavMobileStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5rem;
  a {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 2rem;
    color: white;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: none;
  }
`;

export default function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawerHandler = () => {
    setDrawerOpen(false);
  };

  const rBracket = '/>';
  const lBracket = '<';

  return (
    <NavStyles>
      {drawerOpen && <Backdrop onClick={closeDrawerHandler} />}
      <Drawer show={drawerOpen} onClick={closeDrawerHandler}>
        <NavMobileStyles onClick={closeDrawerHandler}>
          <a href="#head">HOME</a>
          <a href="#technology">TECHNOLOGIES</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
          <a>RESUME</a>
        </NavMobileStyles>
      </Drawer>
      <NavRightBurger onClick={openDrawerHandler}>
        <span />
        <span />
        <span />
      </NavRightBurger>
      {/* <NavLeftStyles>
        <strong>{lBracket}</strong>
        <h1>ScottBillings</h1>
        <strong>{rBracket}</strong>
      </NavLeftStyles> */}
      <NavRightStyles>
        <a href="#head" onClick={() => setDrawerOpen(false)}>
          HOME
        </a>
        <a href="#technology" onClick={() => setDrawerOpen(false)}>
          TECHNOLOGIES
        </a>
        <a href="#projects" onClick={() => setDrawerOpen(false)}>
          PROJECTS
        </a>
        <a href="#contact" onClick={() => setDrawerOpen(false)}>
          CONTACT
        </a>
        <a>RESUME</a>
      </NavRightStyles>
    </NavStyles>
  );
}
