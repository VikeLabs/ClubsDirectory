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
            <Route exact path="/ClubCategories" component={CategoryPage} />
            <Route exact path="/ClubCategories/ClubList/:clubList Club" component={ClubListPage} />
            <Route path="/ClubInfo" component={ClubInfoPage} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
