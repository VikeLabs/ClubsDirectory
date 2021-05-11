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
  padding-bottom: 50px;
`

function ClubListPage() {
  return (
    <PageContainer>
      <TitleItem title={defaultTitle} />
      <CategoryMenu categoryList={defaultCategoryMenu} />
      <h2>Clubs List</h2>
      <Clubs clubs={defaultClubs} />
    </PageContainer>  
  );
}

export default ClubListPage;
