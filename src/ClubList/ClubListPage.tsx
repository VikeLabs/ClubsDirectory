import React from 'react';
import styled from 'styled-components';

import Clubs from './Clubs';
import { defaultTitle, defaultClubs } from './data';
import TitleItem from './Title';

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr;
  grid-template-columns: 1fr 4fr 3fr;
`;

function ClubListPage(categoryTitle: string) {
  return (
    <PageContainer>
      <TitleItem title={categoryTitle} />
      <Clubs clubs={defaultClubs} />
    </PageContainer>
  );
}

export default ClubListPage;
