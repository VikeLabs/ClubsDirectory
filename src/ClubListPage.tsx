import React from 'react';

import CategoryMenu from './CategoryMenu';
import Clubs from './Clubs';
import TitleItem from './Title';
import { defaultTitle, defaultCategoryMenu, defaultClubs } from './data';
import styled from 'styled-components';
import backgroundImg from './Assets/Images/CompletedBackground.png'

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr;
  grid-template-columns: 1fr 4fr 3fr;
`


function ClubListPage() {
  return (
    <PageContainer>    
      <TitleItem title={defaultTitle} />     
      <CategoryMenu categoryList={defaultCategoryMenu} />          
      <Clubs clubs={defaultClubs} />
    </PageContainer>  
  );
}

export default ClubListPage;
