import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';
import '../../pages/Page.css';

const SideDrawerStyles = styled.aside`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  height: 100vh;
  width: 60vw;
  background: rgba(16, 16, 16, 0.548);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  display: flex;
  padding-top: 3rem;
  border-left: 1px solid rgba(73, 73, 73, 0.548);
  border-bottom: 1px solid rgba(73, 73, 73, 0.548);
  border-top: 1px solid rgba(73, 73, 73, 0.548);
  border-radius: 2px @media (max-width: 600px) {
    width: 60vw;
  }
`;

const isBrowser = typeof window !== 'undefined';

export default function SideDrawer(props) {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-right"
      mountOnEnter
      unmountOnExit
    >
      <SideDrawerStyles>{props.children}</SideDrawerStyles>
    </CSSTransition>
  );
  if (isBrowser) {
    return ReactDOM.createPortal(
      content,
      document.getElementById('drawer-hook')
    );
  }
  return null;
}
