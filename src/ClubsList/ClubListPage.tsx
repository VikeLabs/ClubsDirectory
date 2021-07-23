import React from 'react';
import { useParams } from 'react-router-dom';

import { defaultCategory } from '../ClubsCategories/CategoryData';

import { ClubPageDiv } from './ClubListStyles';
import Clubs from './Clubs';
import TitleItem from './Title';

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
  const directory = `Club Categories/${fullTitle} Clubs`;

  return (
    <ClubPageDiv>
      <TitleItem categoryName={fullTitle} directoryName={directory} />
      <Clubs category={fullTitle} />
    </ClubPageDiv>
  );
}

export default ClubListPage;
