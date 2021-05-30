import React from 'react';
import styled from 'styled-components';

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

function TitleItem(props: { categoryName: string; directoryName: string }) {
  return (
    <TitleContainer>
      <TitleTag>{props.categoryName}</TitleTag>
      <TitleDirTag>{props.directoryName}</TitleDirTag>
    </TitleContainer>
  );
}

export default TitleItem;
