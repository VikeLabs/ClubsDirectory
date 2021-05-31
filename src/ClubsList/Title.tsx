import React from 'react';
import styled from 'styled-components';

import CategoryMenu from './CategoryMenu';
import { defaultCategoryMenu } from './ClubListData';

const TitleContainer = styled.div`
  color: white;
  font-family: Helvetica;
  font-weight: bold;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 15%;
  text-overflow: clip;
  align-items: center;
  margin-top: 3%;
  padding-bottom: 10px;
`;

const TitleTag = styled.h1`
  font-size: 72px;
  padding-left: 30px;
`;

const ListingHeader = styled.div`
  display: flex;
  align-items: center;
`;

const TitleDirTag = styled.h3`
  font-size: 17px;
`;

function TitleItem(props: { categoryName: string; directoryName: string }) {
  return (
    <TitleContainer>
      <ListingHeader>
        <CategoryMenu categoryList={defaultCategoryMenu} />
        <TitleTag>{props.categoryName}</TitleTag>
      </ListingHeader>
      <TitleDirTag>{props.directoryName}</TitleDirTag>
    </TitleContainer>
  );
}

export default TitleItem;
