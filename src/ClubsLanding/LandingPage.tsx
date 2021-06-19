import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { categoryDevice, device } from '../Assets/CSS/DeviceBreakPoints';
import desktopPeople from '../Assets/Images/DesktopPeople.png';
import mobileBackground from '../Assets/Images/MobileBackground.png';
import mobilePeople from '../Assets/Images/MobilePeople.png';

const LandingPageTitle = styled.h1`
  @media ${categoryDevice.mobileTiny} {
    font-size: 50px;
    padding-top: 4%;
    margin-left: 3%;
  }
  @media ${categoryDevice.mobileXS} {
    font-size: 60px;
    padding-top: 2%;
    margin-left: 3%;
  }
  @media ${categoryDevice.mobileS} {
    font-size: 60px;
    padding-top: 2%;
    margin-left: 3%;
  }
  @media ${categoryDevice.mobile} {
    font-size: 60px;
    padding-top: 5%;
    margin-left: 3%;
  }
  @media ${device.mobile} {
    color: black;
  }
  font-size: 100px;
  font-weight: 600;
  margin-left: 7%;
  padding-top: 4%;
  color: white;
  grid-column: 1;
  grid-row: 1;
`;

const LandingPageBodyText = styled.p`
  @media ${categoryDevice.mobileTiny} {
    font-size: 16px;
    grid-column: 1;
    margin-left: 5%;
    grid-row: 1/2;
    padding-top: 30%;
  }
  @media ${categoryDevice.mobileXS} {
    font-size: 17px;
    overflow-wrap: break-word;
    padding-top: 0%;
    margin-left: 4%;
    margin-right: 4%;
  }
  @media ${categoryDevice.mobileS} {
    font-size: 17px;
    overflow-wrap: break-word;
    padding-top: 0%;
    margin-left: 4%;
    margin-right: 4%;
  }
  @media ${categoryDevice.mobile} {
    font-size: 18px;
    overflow-wrap: break-word;
    padding-top: 0%;
    margin-left: 4%;
    margin-right: 4%;
  }
  font-size: 30px;
  font-weight: 600;
  height: fit-content;
  width: fit-content;
  margin-left: 8%;
  padding-top: 15%;
  grid-column: 1;
  grid-row: 2;
`;

const LandingDiv = styled.div`
  @media ${device.mobile} {
    background-image: url(${mobileBackground});
    background-repeat: no-repeat;
    background-size: 100% auto;
    grid-template-columns: 100%;
    grid-auto-rows: minmax(50px, max-content);
    padding-bottom: 2%;
  }
  display: grid;
  grid-template-columns: 50% 50%;
  grid-auto-rows: minmax(200px, auto);
  padding-bottom: 30px;
`;

const CategoryNavButton = styled.button`
  @media ${categoryDevice.mobileTiny} {
    width: 260px;
    height: 60px;
    font-size: 20px;
  }
  @media ${categoryDevice.mobileXS} {
    width: 300px;
    height: 60px;
    font-size: 22px;
  }
  @media ${categoryDevice.mobileS} {
    font-size: 22px;
  }
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

const ImgDiv = styled.div`
  @media ${categoryDevice.mobileTiny} {
    background-size: 280px 200px;
    height: 200px;
    width: 280px;
  }
  @media ${categoryDevice.mobileS} {
    background-size: 340px 300px;
    height: 300px;
    width: 340px;
    margin-top: 3%;
  }
  @media ${categoryDevice.mobileXS} {
    background-size: 300px 260px;
    height: 260px;
    width: 300px;
    margin-top: 3%;
  }
  @media ${categoryDevice.mobile} {
    background-size: 390px 300px;
    height: 300px;
    width: 390px;
    margin-top: 10%;
  }
  @media ${device.mobile} {
    background-image: url(${mobilePeople});
    background-repeat: no-repeat;
    grid-column: 1;
    grid-row: 3;
  }
  background-image: url(${desktopPeople});
  background-repeat: no-repeat;
  background-size: 600px 420px;
  grid-column: 2;
  grid-row: 3/5;
`;

const ButtonDiv = styled.div`
  @media ${categoryDevice.mobileTiny} {
    padding-top: 10%;
  }
  @media ${categoryDevice.mobileXS} {
    padding-bottom: 5%;
    padding-top: 10%;
  }
  @media ${categoryDevice.mobileS} {
    padding-top: 10%;
    padding-bottom: 10%;
  }
  @media ${categoryDevice.mobile} {
    padding-top: 10%;
    padding-bottom: 5%;
  }
  @media ${device.mobile} {
    grid-row: 4;
    margin-left: auto;
    margin-right: auto;
  }
  size: fit-content;
  margin-left: 7.5%;
  padding-top: 30%;
  grid-column: 1;
  grid-row: 3;
`;

function LandingPage() {
  return (
    <LandingDiv>
      <LandingPageTitle>Clubs</LandingPageTitle>
      <LandingPageBodyText>
        The University of Victoria Student Society has over 200 different student-led clubs to suit your interests.
      </LandingPageBodyText>
      <ButtonDiv>
        <Link to="/ClubCategories" style={{ textDecoration: 'none' }}>
          <CategoryNavButton>Explore Current Clubs</CategoryNavButton>
        </Link>
      </ButtonDiv>
      <ImgDiv />
    </LandingDiv>
  );
}

export default LandingPage;
