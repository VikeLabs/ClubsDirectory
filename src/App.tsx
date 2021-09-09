import { Box, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// TODO: remove this
import './Assets/CSS/GlobalBackgroundImage.css';
import ClubInfoPage from './ClubInfo/ClubInfoPage';
import { CategoryPage } from './ClubsCategories/CategoryPage';
import ClubListPage from './ClubsList/ClubListPage';
import { Footer } from './Footer';
import { Header } from './Header';
import LandingPage from './pages/home';

function App() {
  return (
    <Container maxW="1130px" height="100%" p="0" id="AppCont">
      <Header />
      <Router>
        <Switch>
          <Box as="main" mt="90px">
            <Route exact path="/" component={LandingPage} />
            {/* Club and Course Union Categories */}
            <Route exact path="/categories" component={CategoryPage} />
            {/* TODO: remove when link on UVSS website is changed to /categories */}
            <Redirect from="/ClubCategories" to="/categories" />
            <Route exact path="/categories/:category" component={ClubListPage} />
            <Route exact path="/categories/:category/:slug" component={ClubInfoPage} />
          </Box>
        </Switch>
      </Router>
      <Footer />
    </Container>
  );
}

export default App;
