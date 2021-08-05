import styled from 'styled-components';

import { device } from '../Assets/CSS/DeviceBreakPoints';

export const HamIconDiv = styled.div`
  @media ${device.mobile} {
    background-color: #ebf6f7;
    &:hover {
      background-color: #1b8091;
    }
  }
  display: inline-block;
  cursor: pointer;
  padding: 3px 5px;
  border-radius: 5px;
  background-color: #1b8091;
  @media screen and (min-width: 768px) {
    &:hover {
      background-color: #125c69;
    }
  }
`;

const HamBar = styled.div`
  @media ${device.mobile} {
    background-color: black;
  }
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;
  border-radius: 2px;
`;
function HamIcon() {
  return (
    <HamIconDiv>
      <HamBar></HamBar>
      <HamBar></HamBar>
      <HamBar></HamBar>
    </HamIconDiv>
  );
}

export default HamIcon;
