import styled from '@emotion/styled';

import { categoryDevice, device } from '../../Assets/CSS/DeviceBreakPoints';
import desktopPeople from '../../Assets/Images/DesktopPeople.png';
import mobileBackground from '../../Assets/Images/MobileBackground.png';

// Styling the title of the landing page.
export const LandingPageTitle = styled.h1`
  @media ${device.mobileTiny} {
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
  @media ${categoryDevice.tablet} {
    font-size: 80px;
  }
  @media ${categoryDevice.tabletL} {
    font-size: 80px;
  }
  font-size: 100px;
  font-weight: 600;
  margin-left: 7%;
  color: white;
  grid-column: 1;
  grid-row: 1;
`;

// Styling the paragraph text displayed on the landing page.
export const LandingPageBodyText = styled.p`
  @media ${device.mobileTiny} {
    font-size: 16px;
    grid-column: 1;
    margin-left: 5%;
    grid-row: 1/2;
    padding-top: 30%;
  }
  @media ${categoryDevice.mobileXS} {
    font-size: 16px;
    overflow-wrap: break-word;
    padding-top: 0%;
    margin-left: 4%;
    margin-right: 2%;
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
  @media ${categoryDevice.tablet} {
    margin-left: 5%;
    padding-top: 0%;
    margin-top: 17%;
    grid-column: 1 / 3;
    grid-row: 1/3;
  }
  @media ${categoryDevice.tabletL} {
    padding-top: 0%;
    margin-left: 5%;
    grid-column: 1 / 3;
  }
  font-size: 30px;
  font-weight: 600;
  height: fit-content;
  width: fit-content;
  margin-left: 8%;
  padding-top: 3%;
  grid-column: 1;
  grid-row: 2;
`;

// Changing the background image and grid layout of the landing page for mobile(width <= 767px) and desktop.
export const LandingDiv = styled.div`
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
`;

// Styling the 'Explore Current Clubs' button.
export const CategoryNavButton = styled.button`
  @media ${device.mobileTiny} {
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

// Styling the image with the people dancing.
export const ImgDiv = styled.div`
  @media ${device.mobileTiny} {
    height: 200px;
    width: 280px;
  }
  @media ${categoryDevice.mobileS} {
    height: 200px;
    width: 340px;
    margin-top: 20%;
  }
  @media ${categoryDevice.mobileXS} {
    height: 260px;
    width: 300px;
    margin-top: 17%;
  }
  @media ${categoryDevice.mobile} {
    height: 280px;
    width: 390px;
    margin-top: 24%;
  }
  @media ${device.mobile} {
    justify-self: center;
    grid-column: 1;
    grid-row: 3;
  }
  @media ${categoryDevice.tablet} {
    height: 300px;
    width: 370px;
  }
  @media ${categoryDevice.tabletL} {
    height: 340px;
    width: 500px;
  }
  background-image: url(${desktopPeople});
  background-repeat: no-repeat;
  background-size: contain;
  height: 400px;
  width: 590px;
  grid-column: 2;
  grid-row: 3/5;
`;

// Styling the 'Explore Current Clubs' button container.
export const ButtonDiv = styled.div`
  @media ${device.mobileTiny} {
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
