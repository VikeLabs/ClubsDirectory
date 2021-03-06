import React from 'react';
import styled from 'styled-components';

import { Title } from './data';

const TitleDiv = styled.div`
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    font-size: 32px;
  }
  grid-area: clubName;
  text-align: left;
  margin-left: 10px;
  margin-bottom: 10px;
  font-size: 37.5px;
  line-height: normal;
  color: #000;
  font-weight: bold;
`;

interface TitleProps {
  title: Title;
}

function TitleItem(props: TitleProps) {
  return (
    <TitleDiv>
      <h1>{props.title.text}</h1>
    </TitleDiv>
  );
}

export default TitleItem;
