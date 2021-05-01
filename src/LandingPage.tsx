import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LandingPageTitle = styled.h1`
  font-size: 100px;
  font-weight: 600;
  margin-left: 55px;
  margin-top: 80px;
`;

const LandingPageBodyText = styled.p`
  font-size: 30px;
  font-weight: 600;
  width: 680px;
  height: 166px;
  margin-left: 55px;
  margin-top: -20px;
`;

const CategoryNavButton = styled.button`
  margin-left: 55px;
  width: 306px;
  height: 61px;
  border-radius: 20px;
  border: 3px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  background: #1b8091;
  font-size: 22px;
  font-weight: 600;
  color: white;
  &:hover {
    color: black;
    background: #26acc4;
  }
`;

function LandingPage() {
  return (
    <div>
      <LandingPageTitle>Clubs</LandingPageTitle>
      <LandingPageBodyText>
        The University of Victoria Student Society has over 200 different student-led clubs to suit your interests.
      </LandingPageBodyText>
      <Link to="/Clubs" style={{ textDecoration: 'none' }}>
        <CategoryNavButton>Explore Current Clubs</CategoryNavButton>
      </Link>
    </div>
  );
}

export default LandingPage;
