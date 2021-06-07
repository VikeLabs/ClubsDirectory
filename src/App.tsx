import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './Assets/CSS/GlobalBackgroundImage.css';
import CategoryPage from './ClubsCategories/CategoryPage';
import ClubInfoPage from './ClubsInfo/ClubInfoPage';
import LandingPage from './ClubsLanding/LandingPage';
import ClubListPage from './ClubsList/ClubListPage';
import Header from './Header';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <div>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/ClubCategories" component={CategoryPage} />
            <Route exact path="/ClubCategories/ClubList/:clubList Club" component={ClubListPage} />
            <Route exact path="/ClubCategories/ClubList/:clubType/:clubName" component={ClubInfoPage} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
