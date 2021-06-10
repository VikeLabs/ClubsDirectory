import { Tag } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ArrowIconDiv = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  grid-row: 1 / -1;
  grid-column: 3;
  margin: auto;
`;

const ClubDes = styled.p`
  @media screen and (max-width: 768px) {
    display: none;
  }
  font-size: 18px;
  margin-left: 25px;
`;

const ClubDesDiv = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  grid-row: 2;
  grid-column: 2;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ClubsDiv = styled.div`
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 95%);
    grid-auto-rows: min-content;
    margin-left: 30px;
    margin-top: 0px;
  }
  display: grid;
  margin-left: 10%;
  margin-top: 50px;
  padding-bottom: 100px;
  grid-template-columns: repeat(1, 70%);
  grid-gap: 70px;
`;

const ClubIconDiv = styled.div`
  @media screen and (max-width: 768px) {
    margin-left: -20px;
    grid-template-rows: min-content;
  }
  @media screen and (min-width: 769px) {
    height: 210px;
    width: 1120px;
    grid-template-rows: 33px 130px 37px;
    grid-template-columns: 250px 700px 150px;
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
  @media screen and (max-width: 768px) {
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
  @media screen and (max-width: 768px) {
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
  @media screen and (max-width: 768px) {
    grid-row: 1 / 4;
  }
  grid-row: 1;
  grid-column: 2;
`;

const ClubTagsDiv = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  grid-row: 3;
  grid-column: 2;
`;

const LinkButton = styled(Link)`
  text-decoration: none;
`;

const StyledTag = styled(Tag)`
  @media screen and (max-width: 768px) {
    display: none;
  }
  margin-left: 20px;
  margin-top: 10px;
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
};
