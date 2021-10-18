
import React from 'react';

import styled from 'styled-components';


const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #000b76;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  padding: 2em;
  box-sizing: border-box;
`;

const MobileMenu = (props) => {
    return (
      <StyledMenu open={props.open}>
          {props.children}
      </StyledMenu>
    )
  }

  export default MobileMenu;