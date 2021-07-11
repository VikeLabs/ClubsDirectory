import React from 'react';
import styled from 'styled-components';

import { device } from './Assets/CSS/DeviceBreakPoints';

const HeaderBar = styled.nav`
  @media ${device.mobile} {
    box-shadow: 0 7px 7px 5px rgba(0, 0, 0, 0.15);
  }
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: auto;
  background: #1b8091;
  color: white;
  box-shadow: 0 15px 15px 10px rgba(0, 0, 0, 0.2);
`;

const ContentDiv = styled.div`
  // padding: top right bottom left
  padding: 1.5% 1% 1.5% 1%;
`;

const HeaderTitle = styled.h1`
  @media ${device.mobile} {
    font-size: 50px;
  }
  font-size: 60px;
  font-weight: 600;
  color: white;
  font-style: normal;
`;

function Header() {
  return (
    <HeaderBar>
      <ContentDiv>
        <HeaderTitle>UVSS Clubs</HeaderTitle>
      </ContentDiv>
    </HeaderBar>
  );
}

export default Header;
