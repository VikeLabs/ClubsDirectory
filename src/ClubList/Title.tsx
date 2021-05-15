import React from 'react';
import styled from 'styled-components';

import { Title } from './data';

interface TitleProps {
  title: string;
}

const TitleContainer = styled.div`
  grid-row: 1;
  grid-column: 1 / -1;
  color: white;
  font-family: Helvetica;
  font-weight: bold;
`;

const TitleTag = styled.h1`
  display: inline-block;
  font-size: 72px;
  margin: 50px 500px 15px 70px;
`;

const TitleDirTag = styled.h3`
  display: inline-block;
  font-size: 17px;
`;

function TitleItem(props: TitleProps) {
  return (
    <TitleContainer>
      <TitleTag>{props.title}</TitleTag>
      {/* <TitleDirTag>{props.title.directoryName}</TitleDirTag> */}
    </TitleContainer>
  );
}

export default TitleItem;
