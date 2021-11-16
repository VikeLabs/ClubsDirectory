import { Box, Container } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// TODO: remove this
import './Assets/CSS/GlobalBackgroundImage.css';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { CategoryPage } from './pages/categories';
import { ClubPage } from './pages/club';
import { ClubsPage } from './pages/clubs';
import { LandingPage } from './pages/home';

const App = () => (
  <Container maxW="1130px" height="100%" p="0" id="AppCont">
    <Header />
    <Box as="main" mt="90px">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Club and Course Union Categories */}
          {/* TODO: remove when link on UVSS website is changed to /categories */}
          <Route path="/ClubCategories" element={<CategoryPage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/categories/:category" element={<ClubsPage />} />
          <Route path="/categories/:category/:slug" element={<ClubPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
    <Footer />
  </Container>
);

export default App;
