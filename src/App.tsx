import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CategoryPage from './CategoryModule/CategoryPage';
import Header from './Header';
import LandingPage from './LandingPage';

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
