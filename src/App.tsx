<<<<<<< HEAD
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import ClubInfoPage from './ClubInfo/ClubInfoPage';
import './App.css';
=======
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './Assets/CSS/GlobalBackgroundImage.css';
import { defaultCategory } from './ClubsCategories/CategoryData';
import CategoryPage from './ClubsCategories/CategoryPage';
import ClubInfoPage from './ClubsInfo/ClubInfoPage';
import LandingPage from './ClubsLanding/LandingPage';
import ClubListPage from './ClubsList/ClubListPage';
import Header from './Header';
>>>>>>> 5f73e71e3c0f21d68411e3f6da7a689c179f1606

function App() {
  // // Array holding all the category data.
  const [categoies] = useState(defaultCategory);
  return (
<<<<<<< HEAD
    <ChakraProvider>
      <ClubInfoPage />
    </ChakraProvider>
=======
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
>>>>>>> 5f73e71e3c0f21d68411e3f6da7a689c179f1606
  );
}

export default App;
