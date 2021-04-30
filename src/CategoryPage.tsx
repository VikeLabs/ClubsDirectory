import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ArtMock from './Assets/MockPages/ArtMock';
import CategoryButtonMatrix from './CategoryButtonMatrix';
import './Assets/CSS/CategoryButton.css';
import { Category, defaultCategory } from './categoryData';

function CategoryPage() {
  // Array holding all the category data.
  const [categoies] = useState(defaultCategory);
  return (
    <div className="category-matrix">
      <Router>
        <Switch>
          {/* This Route tag is the default landing page. */}
          <Route exact path="/" component={CategoryButtonMatrix} />
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
