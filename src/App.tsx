import { Box, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// TODO: remove this
import './Assets/CSS/GlobalBackgroundImage.css';
import { CategoryPage } from './ClubsCategories/CategoryPage';
import { Footer } from './Footer';
import { Header } from './Header';
import { ClubPage } from './pages/club';
import { ClubsPage } from './pages/clubs';
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
            {/* TODO: remove when link on UVSS website is changed to /categories */}
            <Route exact path="/ClubCategories" component={CategoryPage} />
            <Route exact path="/categories" component={CategoryPage} />
            <Route exact path="/categories/:category" component={ClubsPage} />
            <Route exact path="/categories/:category/:slug" component={ClubPage} />
          </Box>
        </Switch>
      </Router>
      <Footer />
    </Container>
  );
}

export default App;
