import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography.js';

const LayoutStyles = styled.section`
  // height: 100vh;
  // overflow-y: auto;
  // overflow-x: hidden;
  // perspective: 10px;
  // scroll-snap-type: y mandatory;
  // background-color: #393939;
`;

export default function Layout({ children }) {
  const say = () => {
    console.log('scrolling');
  };
  console.log(window);

  useEffect(() => {
    window.addEventListener('scroll', say);
    return () => {
      window.removeEventListener('scroll', say);
    };
  }, []);

  return (
    <LayoutStyles>
      <GlobalStyles />
      <Typography />
      <Nav />
      {children}
      {/* <Footer /> */}
    </LayoutStyles>
  );
}
