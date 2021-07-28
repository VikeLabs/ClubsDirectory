import { Tag } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { device, categoryDevice } from '../Assets/CSS/DeviceBreakPoints';
import mobileBackground from '../Assets/Images/MobileBackground.png';

import PhotoItem from './Photo';
//change to small + medium size
const ArrowIconDiv = styled.div`
  @media ${device.laptop} {
    display: none;
  }
  grid-row: 1 / -1;
  grid-column: 3;
  margin: auto;
`;

const ClubDes = styled.p`
  @media ${device.mobile} {
    display: none;
  }
  @media ${categoryDevice.laptop} {
    margin-top: 5px;
  }
  font-size: 18px;
  margin-left: 25px;
`;

const ClubDesDiv = styled.div`
  @media ${device.mobile} {
    display: none;
  }
  grid-row: 2;
  grid-column: 2;
  overflow: hidden;
`;

const ClubsDiv = styled.div`
  @media ${device.mobile} {
    grid-template-columns: repeat(1, 95%);
    grid-auto-rows: min-content;
    margin-left: 30px;
    margin-top: 0px;
    grid-gap: 20px;
  }
  @media ${categoryDevice.laptop} {
    margin-left: 7%;
  }
  display: grid;
  margin-left: 10%;
  margin-top: 50px;
  padding-bottom: 100px;
  grid-template-columns: repeat(1, 70%);
  grid-auto-rows: minmax(300px, auto);
  grid-gap: 30px;
`;

const ClubIconDiv = styled.div`
  @media ${device.mobile} {
    margin-left: -20px;
    grid-template-rows: min-content;
  }
  @media ${categoryDevice.laptop} {
    height: 180px;
    width: 700px;
    grid-template-rows: 25px 110px 28px;
    grid-template-columns: 180px 470px;
  }
  @media ${device.desktop} {
    height: 210px;
    width: 900px;
    grid-template-rows: 33px 130px 37px;
    grid-template-columns: 250px 500px 150px;
  }
  background-color: white;
  display: grid;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 5px 10px 8px #818080;
  &:hover {
    background-color: lightgray;
  }
  &:active {
    background-color: gray;
  }
`;

const ClubName = styled.h1`
  @media ${device.mobile} {
    align-items: center;
    font-size: 25px;
    text-align: center;
    word-break: break-word;
    overflow: hidden;
  }
  @media ${categoryDevice.laptop} {
    margin-left: 10px;
  }
  font-weight: bold;
  font-size: 22px;
`;

const ClubImgDiv = styled.div`
  @media ${device.mobile} {
    padding-top: 12px;
    padding-bottom: 12px;
    margin-left: 12px;
    max-width: 130px;
  }
  grid-row: 1 / -1;
  grid-column: 1;
  margin-left: 7px;
  margin-top: 2px;
`;

const ClubNameDiv = styled.div`
  @media ${device.mobile} {
    grid-row: 1 / 4;
    padding-right: 10px;
    justify-content: right;
  }
  grid-row: 1;
  grid-column: 2;
`;

const ClubPageDiv = styled.div`
  @media ${device.mobile} {
    background-image: url(${mobileBackground});
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
`;

const ClubTagsDiv = styled.div`
  @media ${device.mobile} {
    display: none;
  }
  grid-row: 3;
  grid-column: 2;
  text-align: left;
  margin-left: 20px;
  margin-top: 10px;
  padding-left: 15px;
`;

const LinkButton = styled(Link)`
  text-decoration: none;
  display: contents;
`;

const StyledPhoto = styled(PhotoItem)`
  width: 400px;
  height: 400px;
  display: block;
`;

const StyledTag = styled(Tag)`
  @media ${device.mobile} {
    display: none;
  }
`;

export {
  ClubsDiv,
  LinkButton,
  ClubDes,
  ClubName,
  ArrowIconDiv,
  ClubTagsDiv,
  ClubDesDiv,
  ClubNameDiv,
  ClubImgDiv,
  ClubIconDiv,
  StyledTag,
  StyledPhoto,
  ClubPageDiv,
};
