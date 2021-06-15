import { Tag } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { device } from '../Assets/CSS/DeviceBreakPoints';
import mobileBackground from '../Assets/Images/MobileBackground.png';

import PhotoItem from './Photo';

const ArrowIconDiv = styled.div`
  @media ${device.mobile} {
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
  font-size: 18px;
  margin-left: 25px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const ClubDesDiv = styled.div`
  @media ${device.mobile} {
    display: none;
  }
  grid-row: 2;
  grid-column: 2;
  text-overflow: ellipsis;
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
  display: grid;
  margin-left: 300px;
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
  background-color: white;
  display: grid;
  grid-template-rows: 1fr 4fr 1fr;
  grid-template-columns: 3fr 8fr 1.4fr;
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
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    margin-left: 20px;
  }
  font-weight: bold;
  font-size: 22px;
`;

const ClubImgDiv = styled.div`
  @media ${device.mobile} {
    padding-top: 12px;
    padding-bottom: 12px;
    margin-left: 12px;
  }
  grid-row: 1 / -1;
  grid-column: 1;
  margin-left: 7px;
  margin-top: 2px;
`;

const ClubNameDiv = styled.div`
  @media ${device.mobile} {
    grid-row: 1 / 4;
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
  margin: 5px 10px;
  padding-left: 15px;
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
