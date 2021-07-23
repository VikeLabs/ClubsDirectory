import { Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { categoryDevice, device } from '../Assets/CSS/DeviceBreakPoints';
import mobileBackground from '../Assets/Images/MobileCategoryBackground.png';

// Styling the category button icon size for desktop and mobile.
const ButtonIcon = styled(Center)`
  @media ${device.mobile} {
    font-size: 50px;
  }
  font-size: 50px;
  padding-bottom: 10px;
`;

// Styling the text located in the category buttons.
const ButtonLabel = styled.p`
  margin-top: -5px;
`;

// Changing the categories page background when screen width is at 767px or less.
const CategoryDiv = styled.div`
  @media ${device.mobile} {
    background-color: #ebf6f7;
    background-image: url(${mobileBackground});
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
`;

// Styling how the title is displayed depending on screen width.
const CategoryTitle = styled.h1`
  @media ${device.mobile} {
    font-size: 32px;
    color: black;
    margin-left: 30px;
  }
  position: flex;
  font-size: 60px;
  font-weight: 600;
  margin-left: 39px;
  padding-top: 4%;
  color: white;
  font-family: Helvetica;
`;

// Styling how the grid is displayed on the categories page depending on screen width.
const Grid = styled.div`
  @media ${device.mobileTiny} {
    grid-template-columns: repeat(2, max-content);
    margin-top: 10%;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
  @media ${categoryDevice.mobileXS} {
    grid-template-columns: repeat(2, max-content);
    margin-top: 10%;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
  @media ${categoryDevice.mobileS} {
    grid-template-columns: repeat(2, max-content);
    margin-top: 15%;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  @media ${categoryDevice.mobile} {
    grid-template-columns: repeat(2, max-content);
    margin-top: 14%;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  @media ${categoryDevice.tablet} {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  @media ${categoryDevice.tabletL} {
    grid-column-gap: 40px;
  }
  display: grid;
  margin-top: 3%;
  padding-bottom: 80px;
  grid-template-columns: repeat(4, max-content);
  grid-auto-rows: minmax(100px, max-content);
  grid-row-gap: 40px;
  grid-column-gap: 40px;
  justify-content: center;
`;

// Styling how the category buttons look depending on screen width.
const Gridbutton = styled.button`
  @media ${device.mobileTiny} {
    width: 120px;
    height: 120px;
    font-size: 19px;
  }
  @media ${categoryDevice.mobileXS} {
    width: 140px;
    height: 140px;
    font-size: 23px;
  }
  @media ${categoryDevice.mobileS} {
    width: 150px;
    height: 150px;
    font-size: 25px;
  }
  @media ${categoryDevice.mobile} {
    width: 175px;
    height: 175px;
    font-size: 30px;
  }
  @media ${categoryDevice.tablet} {
    width: 200px;
    height: 200px;
    font-size: 30px;
  }
  @media ${categoryDevice.tabletL} {
    width: 250px;
    height: 250px;
    font-size: 30px;
  }
  font-weight: 500;
  font-size: 25px;
  width: 200px;
  height: 120px;
  color: black;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  border: 0px;
  background: #ffffff;
  border-radius: 12px;
  text-decoration: none;
  &:hover {
    color: white;
    background: #1b8091;
  }
`;

// Removing the underscore that is default with Link.
const LinkButton = styled(Link)`
  text-decoration: none;
`;

export { Grid, Gridbutton, CategoryTitle, ButtonIcon, ButtonLabel, LinkButton, CategoryDiv };
