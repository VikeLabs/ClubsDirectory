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
`;

const ClubsDiv = styled.div`
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 100%);
    grid-auto-rows: minmax(100px, auto);
    margin-left: 30px;
  }
  display: grid;
  margin-left: 300px;
  margin-top: 50px;
  padding-bottom: 100px;
  grid-template-columns: repeat(1, 70%);
  grid-auto-rows: minmax(300px, auto);
`;

const ClubIconDiv = styled.div`
  @media screen and (max-width: 768px) {
    margin-left: -20px;
    grid-template-rows: 1fr 0.1fr 0.7fr;
    grid-template-columns: 3fr 5fr 1.4fr;
  }
  background-color: white;
  margin: 45px 0px;
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
  @media screen and (max-width: 768px) {
    font-size: 25px;
    margin-left: 20px;
  }
  font-weight: bold;
  font-size: 22px;
`;

const ClubImgDiv = styled.div`
  @media screen and (max-width: 768px) {
    grid-column: auto;
  }
  grid-row: 1 / -1;
  grid-column: 1;
  margin-left: 7px;
  margin-top: 2px;
`;

const ClubNameDiv = styled.div`
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
  @media screen and (max-width: 768px) {
    width: 350px;
    height: 200px;
  }
  text-decoration: none;
`;

const StyledTag = styled(Tag)`
  @media screen and (max-width: 768px) {
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
};
