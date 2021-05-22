import React from 'react';
import styled from 'styled-components';

import { defaultClubs, Title } from './ClubListData';
import Clubs from './Clubs';
import TitleItem from './Title';

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr;
  grid-template-columns: 1fr 4fr 3fr;
`;

function ClubListPage(categoryTitle: string) {
  const titleData: Title = {
    categoryName: categoryTitle,
    directoryName: `Club Categories/${categoryTitle} Clubs`,
  };

  return (
    <PageContainer>
      <TitleItem title={titleData} />
      <Clubs clubs={defaultClubs} />
    </PageContainer>
  );
}

export default ClubListPage;
