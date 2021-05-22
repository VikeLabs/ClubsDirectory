import { Tag } from '@chakra-ui/react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Club } from './ClubListData';
import PhotoItem from './Photo';

const ClubIconDiv = styled.div`
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

const StyledTag = styled(Tag)`
  margin: 5px 10px;
  padding-left: 15px;
`;

const ClubImgDiv = styled.div`
  grid-row: 1 / -1;
  grid-column: 1;
  margin-left: 7px;
  margin-top: 2px;
`;

const ClubNameDiv = styled.div`
  grid-row: 1;
  grid-column: 2;
`;

const ClubDesDiv = styled.div`
  grid-row: 2;
  grid-column: 2;
`;

const ClubTagsDiv = styled.div`
  grid-row: 3;
  grid-column: 2;
`;

const ArrowIconDiv = styled.div`
  grid-row: 1 / -1;
  grid-column: 3;
  margin: auto;
`;

const ClubName = styled.h1`
  font-weight: bold;
  font-size: 22px;
`;

const ClubDes = styled.p`
  font-size: 18px;
  margin-left: 25px;
`;

const LinkedButton = styled(Link)`
  text-decoration: none;
`;

interface ClubProp {
  club: Club;
}

function ClubIcon(props: ClubProp) {
  return (
    // Linked button switches the page to the club info page when clicked.
    <LinkedButton to="/Testing/All">
      <ClubIconDiv>
        <ClubImgDiv>
          <PhotoItem source={props.club.clubImage.source} alt={props.club.clubImage.alt} />
        </ClubImgDiv>
        <ClubNameDiv>
          <ClubName>{props.club.clubName}</ClubName>
        </ClubNameDiv>
        <ClubDesDiv>
          <ClubDes>{props.club.clubDescription}</ClubDes>
        </ClubDesDiv>
        <ClubTagsDiv>
          {props.club.clubTags.map((tag, index) => {
            return (
              <StyledTag borderRadius="full" key={index}>
                {tag}
              </StyledTag>
            );
          })}
        </ClubTagsDiv>
        <ArrowIconDiv>
          <button>
            <IoIosArrowForward size={150} color="#74B7C1" style={{ stroke: 'lightgray', strokeWidth: '3' }} />
          </button>
        </ArrowIconDiv>
      </ClubIconDiv>
    </LinkedButton>
  );
}

const ClubsDiv = styled.div`
  grid-row: 2;
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface ClubsProp {
  clubs: Club[];
}

function Clubs(props: ClubsProp) {
  return (
    <ClubsDiv>
      {props.clubs.map((club, index) => {
        return <ClubIcon club={club} key={index} />;
      })}
    </ClubsDiv>
  );
}

export default Clubs;
