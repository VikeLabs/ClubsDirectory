import React from 'react';

import CategoryMenu from './CategoryMenu';
import Clubs from './Clubs';
import TitleItem from './Title';
import { defaultTitle, defaultCategoryMenu, defaultClubs } from './data';
import styled from 'styled-components';
import backgroundImg from './Assets/Images/CompletedBackground.png'

const PageContainer = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-color: white;
  display: grid;
  grid-template-rows: 1fr 5fr;
  grid-template-columns: 1fr 4fr 3fr;
`

const CategoryMenuDiv = styled.div`
grid-row: 1;
grid-column: 1;
`



function ClubListPage() {
  return (
    <PageContainer>    
      <TitleItem title={defaultTitle} />
      <CategoryMenuDiv>
        <CategoryMenu categoryList={defaultCategoryMenu} />
      </CategoryMenuDiv>      
      <Clubs clubs={defaultClubs} />
    </PageContainer>  
  );
}

export default ClubListPage;
