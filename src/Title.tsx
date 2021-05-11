import React from 'react';

import { Title } from './data';
import styled from 'styled-components';

interface TitleProps {
  title: Title;
}

const TitleContainer = styled.div`
  color: white;
  font-family: Helvetica;
  font-weight: bold;
`

const TitleTag = styled.h1`
  display: inline-block;
  font-size: 72px;
  margin: 50px 500px 15px 70px; 
`

const TitleDirTag = styled.h3`
  display: inline-block;
  font-size: 17px;
`


function TitleItem(props: TitleProps) {
  return (
    <TitleContainer>
      <TitleTag>{props.title.categoryName}</TitleTag>
      <TitleDirTag>{props.title.directoryName}</TitleDirTag>
    </TitleContainer>
  );
}

export default TitleItem;
