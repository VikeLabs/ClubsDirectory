import { Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { categoryDevice, device } from '../Assets/CSS/DeviceBreakPoints';
import mobileBackground from '../Assets/Images/MobileCategoryBackground.png';

const ButtonIcon = styled(Center)`
  @media ${device.mobile} {
    font-size: 50px;
  }
  font-size: 100px;
  padding-bottom: 10px;
`;

const ButtonLabel = styled.p`
  margin-top: -5px;
`;

const CategoryDiv = styled.div`
  @media ${device.mobile} {
    background-color: #ebf6f7;
    background-image: url(${mobileBackground});
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
`;

const CategoryTitle = styled.h1`
  @media ${device.mobileS} {
    font-size: 32px;
    color: black;
    margin-left: 30px;
  }
  @media ${categoryDevice.mobile} {
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
  font-style: normal;
`;

const Grid = styled.div`
  @media ${categoryDevice.mobileTiny} {
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
  margin-top: 5%;
  padding-bottom: 100px;
  grid-template-columns: repeat(3, max-content);
  grid-auto-rows: minmax(100px, max-content);
  grid-row-gap: 40px;
  grid-column-gap: 40px;
  justify-content: center;
`;

const Gridbutton = styled.button`
  @media ${categoryDevice.mobileTiny} {
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
  font-size: 50px;
  width: 300px;
  height: 300px;
  color: black;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  border: 0px;
  background: #ffffff;
  border-radius: 12px;
  text-decoration: none;
  padding-top: 20px;
  &:hover {
    color: white;
    background: #1b8091;
  }
`;

const LinkButton = styled(Link)`
  text-decoration: none;
`;

export { Grid, Gridbutton, CategoryTitle, ButtonIcon, ButtonLabel, LinkButton, CategoryDiv };
