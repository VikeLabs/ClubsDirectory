import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
            <Route path={`/${category.title}`} component={category.page} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}
export default CategoryPage;
