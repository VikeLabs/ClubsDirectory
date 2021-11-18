import { Link } from 'react-router-dom';

import { ButtonDiv, CategoryNavButton, ImgDiv, LandingDiv, LandingPageBodyText, LandingPageTitle } from './styles';

export const LandingPage = () => (
  <LandingDiv>
    <LandingPageTitle>Clubs</LandingPageTitle>
    <LandingPageBodyText>
      The University of Victoria Student Society has over 200 different student-led clubs to suit your interests.
    </LandingPageBodyText>
    <ButtonDiv>
      {/* Linking the button to change pages to the club categories. */}
      <Link to="/categories" style={{ textDecoration: 'none' }}>
        <CategoryNavButton>Explore Current Clubs</CategoryNavButton>
      </Link>
    </ButtonDiv>
    <ImgDiv />
  </LandingDiv>
);
