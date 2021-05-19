import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ClubInfoPage from '../ClubInfo/ClubInfoPage';
import ClubListPage from '../ClubList/ClubListPage';

import CategoryButtonMatrix from './CategoryButtonMatrix';
import { defaultCategory } from './CategoryData';

function CategoryPage() {
  // Array holding all the category data.
  const [categoies] = useState(defaultCategory);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/Clubs" component={CategoryButtonMatrix} />
          {categoies.map((category) => (
            // Creating Route tags for each category title and corresponding page.
            <Route path={`/${category.ShortTitle}`} component={() => ClubListPage(category.FullTitle)} />
          ))}
          <Route path="/Testing/All" component={ClubInfoPage} />
        </Switch>
      </Router>
    </div>
  );
}
export default CategoryPage;
