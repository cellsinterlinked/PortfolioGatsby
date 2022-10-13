import React from 'react';
import ReactDOM from 'react-dom';

import styled, { keyframes } from 'styled-components';

const BackdropStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0.75);
  opacity: 0.6;
  z-index: 60;
`;

export default function Backdrop(props) {
  return ReactDOM.createPortal(
    <BackdropStyles onClick={props.onClick} />,
    document.getElementById('backdrop-hook')
  );
}
