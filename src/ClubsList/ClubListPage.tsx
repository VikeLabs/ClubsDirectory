import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { defaultCategory } from '../ClubsCategories/CategoryData';

import { Title } from './ClubListData';
import Clubs from './Clubs';
import TitleItem from './Title';

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr;
  grid-template-columns: 1fr 4fr 3fr;
`;

// getFulltitle takes the club category path ID and searches for the full title of the category from the category data file.
function getFullTitle(pathClubID: string) {
  // Variable for storing the full title when found else, empty string.
  let tempTitle: string = '';

  defaultCategory.filter((item) => item.ShortTitle === pathClubID).map((item, index) => (tempTitle = item.FullTitle));

  return tempTitle;
}

function ClubListPage() {
  const { clubList } = useParams<{ clubList: string }>();
  const fullTitle = getFullTitle(clubList);

  const titleData: Title = {
    categoryName: fullTitle,
    directoryName: `Club Categories/${fullTitle} Clubs`,
  };

  return (
    <PageContainer>
      <TitleItem title={titleData} />
      <Clubs type={clubList} />
    </PageContainer>
  );
}

export default ClubListPage;
