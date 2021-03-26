import React from 'react';

import CategoryMenu from './Components/CategoryMenu';
import Clubs from './Components/Clubs';
import TitleItem from './Components/Title';
import { defaultTitle, defaultCategoryMenu, defaultClubs } from './data';

function ClubListPage() {
  return (
    <div>
      <TitleItem title={defaultTitle} />
      <h2>Hamburger Menu</h2>
      <CategoryMenu categoryList={defaultCategoryMenu} />
      <h2>Clubs List</h2>
      <Clubs clubs={defaultClubs} />
    </div>
  );
}

export default ClubListPage;
