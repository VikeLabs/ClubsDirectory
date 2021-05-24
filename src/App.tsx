import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './Assets/CSS/GlobalBackgroundImage.css';
import { defaultCategory } from './ClubsCategories/CategoryData';
import CategoryPage from './ClubsCategories/CategoryPage';
import ClubInfoPage from './ClubsInfo/ClubInfoPage';
import LandingPage from './ClubsLanding/LandingPage';
import ClubListPage from './ClubsList/ClubListPage';
import Header from './Header';

function App() {
  // // Array holding all the category data.
  const [categoies] = useState(defaultCategory);
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <div>
            <Route exact path="/" component={LandingPage} />
            <Route path="/Clubs" component={CategoryPage} />
            {categoies.map((category) => (
              // Creating Route path for each category title to the corresponding club listing page.
              <Route path={`/${category.ShortTitle}`} component={() => ClubListPage(category.FullTitle)} />
            ))}
            <Route path="/ClubInfo" component={ClubInfoPage} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
