import React from 'react';
import styled from 'styled-components';

const NavStyles = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background: transparent;

  p {
    margin-right: 4rem;
    font-size: 1.2rem;
    letter-spacing: 2px;
    font-weight: bold;
    cursor: pointer;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <p>HOME</p>
      <p>TECHNOLOGIES</p>
      <p>PROJECTS</p>
      <p>CONTACT</p>
      <p>RESUME</p>
    </NavStyles>
  );
}
