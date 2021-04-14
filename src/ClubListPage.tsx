import React from 'react';

import CategoryMenu from './CategoryMenu';
import Clubs from './Clubs';
import TitleItem from './Title';
import { defaultTitle, defaultCategoryMenu, defaultClubs } from './data';
import styled from 'styled-components';

const PageContainer = styled.div`
  background-color: ${(props) => props.theme.uvssBlue};
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
