import React from 'react';
import styled from 'styled-components';

import CategoryMenu from './CategoryMenu';
import { defaultCategoryMenu } from './ClubListData';

const TitleContainer = styled.div`
  @media screen and (max-width: 768px) {
    padding-top: 5%;
  }
  color: white;
  font-family: Helvetica;
  font-weight: bold;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 15%;
  text-overflow: clip;
  align-items: center;
  padding-top: 3%;
  padding-bottom: 10px;
`;

const TitleTag = styled.h1`
  @media screen and (max-width: 768px) {
    font-size: 40px;
    color: black;
  }
  font-size: 72px;
  padding-left: 30px;
`;

const ListingHeader = styled.div`
  display: flex;
  align-items: center;
`;

const TitleDirTag = styled.h3`
  @media screen and (max-width: 768px) {
    display: none;
  }
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
