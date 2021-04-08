import React from 'react';

import CategoryMenu from './CategoryMenu';
import Clubs from './Clubs';
import TitleItem from './Title';
import { defaultTitle, defaultCategoryMenu, defaultClubs } from './data';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  font: 'sans-serif',
  fontStyle: 'normal',
  uvssBlue: '#1B8091'
};

const PageContainer = styled.div`
  background-color: ${(props) => props.theme.uvssBlue};
`

function ClubListPage() {
  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <TitleItem title={defaultTitle} />
        <CategoryMenu categoryList={defaultCategoryMenu} />
        <h2>Clubs List</h2>
        <Clubs clubs={defaultClubs} />
      </PageContainer>
    </ThemeProvider>
  );
}

export default ClubListPage;
