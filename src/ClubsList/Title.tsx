import React from 'react';
import styled from 'styled-components';

import { Title } from './ClubListData';

interface TitleProps {
  title: Title;
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
  margin: 50px 500px 15px 80px;
`;

const TitleDirTag = styled.h3`
  display: inline-block;
  font-size: 17px;
`;

function TitleItem(props: TitleProps) {
  return (
    <TitleContainer>
      <TitleTag>{props.title.categoryName}</TitleTag>
      <TitleDirTag>{props.title.directoryName}</TitleDirTag>
    </TitleContainer>
  );
}

export default TitleItem;
