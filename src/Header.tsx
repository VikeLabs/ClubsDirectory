import React from 'react';
import styled from 'styled-components';

const HeaderBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  background: #1b8091;
  color: white;
  box-shadow: 0 15px 15px 10px rgba(0, 0, 0, 0.2);
`;

function Header() {
  return (
    <HeaderBar>
      <h1>UVSS</h1>
    </HeaderBar>
  );
}

export default Header;