import React from 'react';
import styled from 'styled-components';

import { CategoryTitle } from './CategoryModule/MatrixStyledComponents';

const HeaderBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-height: 15vh;
  background: #1b8091;
  color: white;
  box-shadow: 0 15px 15px 10px rgba(0, 0, 0, 0.2);
`;

function Header() {
  return (
    <HeaderBar>
      <CategoryTitle>UVSS</CategoryTitle>
    </HeaderBar>
  );
}

export default Header;
