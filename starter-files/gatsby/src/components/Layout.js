import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography.js';

const LayoutStyles = styled.section`
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 10px;
  // scroll-snap-type: y mandatory;
  // background-color: #393939;
`;

export default function Layout({ children }) {
  return (
    <LayoutStyles>
      <GlobalStyles />
      <Typography />
      {/* <Nav /> */}
      {children}
      {/* <Footer /> */}
    </LayoutStyles>
  );
}
