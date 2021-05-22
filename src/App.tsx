import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './Assets/CSS/GlobalBackgroundImage.css';
import CategoryPage from './ClubsCategories/CategoryPage';
import LandingPage from './ClubsLanding/LandingPage';
import Header from './Header';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <div>
            <Route exact path="/" component={LandingPage} />
            <Route path="/Clubs" component={CategoryPage} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
