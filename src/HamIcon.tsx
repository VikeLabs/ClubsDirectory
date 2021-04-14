/* A styled Hamburger Icon Component */
import React from 'react'
import styled from 'styled-components';

export const HamIconDiv = styled.div`
  display: inline-block;
  cursor: pointer;
  margin-left: 30px;
  padding: 3px 5px;
  border-radius: 5px;
`

const HamBar = styled.div`
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;
  border-radius:2px;
`
function HamIcon() {

  return (
    <HamIconDiv>
        <HamBar></HamBar>
        <HamBar></HamBar>
        <HamBar></HamBar>
      </HamIconDiv>   
  )
}

export default HamIcon
