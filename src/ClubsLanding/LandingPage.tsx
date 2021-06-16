import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { device } from '../Assets/CSS/DeviceBreakPoints';
import mobileBackground from '../Assets/Images/MobileBackground.png';

const LandingPageTitle = styled.h1`
  @media ${device.mobile} {
    font-size: 60px;
    padding-top: 25px;
    color: black;
  }
  font-size: 100px;
  font-weight: 600;
  margin-left: 55px;
  padding-top: 70px;
  color: white;
`;

const LandingPageBodyText = styled.p`
  @media ${device.mobile} {
    font-size: 18px;
    height: 50px;
    width: 300px;
    padding-top: 5px;
  }
  font-size: 30px;
  font-weight: 600;
  width: 680px;
  height: 166px;
  margin-left: 55px;
  padding-top: 40px;
`;

const LandingDiv = styled.div`
  @media ${device.mobile} {
    background-image: url(${mobileBackground});
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
`;

const CategoryNavButton = styled.button`
  @media ${device.mobile} {
    margin-top: 400px;
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
    <LandingDiv>
      <LandingPageTitle>Clubs</LandingPageTitle>
      <LandingPageBodyText>
        The University of Victoria Student Society has over 200 different student-led clubs to suit your interests.
      </LandingPageBodyText>
      <Link to="/ClubCategories" style={{ textDecoration: 'none' }}>
        <CategoryNavButton>Explore Current Clubs</CategoryNavButton>
      </Link>
    </LandingDiv>
  );
}

export default LandingPage;
