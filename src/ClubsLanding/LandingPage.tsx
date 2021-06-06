import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LandingPageTitle = styled.h1`
  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
  font-size: 100px;
  font-weight: 600;
  margin-left: 55px;
  margin-top: 70px;
  color: black;
`;

const LandingPageBodyText = styled.p`
  @media screen and (max-width: 768px) {
    font-size: 30px;
    height: 50px;
    width: 300px;
  }
  font-size: 30px;
  font-weight: 600;
  width: 680px;
  height: 166px;
  margin-left: 55px;
  margin-top: 40px;
`;

const CategoryNavButton = styled.button`
  @media screen and (max-width: 768px) {
    margin-top: 300px;
    margin-left: 50px;
  }
  margin-left: 55px;
  margin-top: 60px;
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
      <Link to="/ClubCategories" style={{ textDecoration: 'none' }}>
        <CategoryNavButton>Explore Current Clubs</CategoryNavButton>
      </Link>
    </div>
  );
}

export default LandingPage;
