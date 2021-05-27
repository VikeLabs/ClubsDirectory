import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import data from '../JSON/MockData.json';

import { defaultClubs, Club, ClubData } from './ClubListData';
import {
  ClubsDiv,
  LinkedButton,
  ClubDes,
  ClubName,
  ArrowIconDiv,
  ClubTagsDiv,
  ClubDesDiv,
  ClubNameDiv,
  ClubImgDiv,
  ClubIconDiv,
  StyledTag,
} from './ClubListStyling';
import PhotoItem from './Photo';

function ClubIcon(iconProps: { club: ClubData; type: string }) {
  return (
    // Linked button switches the page to the club info page when clicked.
    <LinkedButton to={`/ClubCategories/ClubList/${iconProps.type}/${iconProps.club.clubName}`}>
      <ClubIconDiv>
        {/* <ClubImgDiv>
          <PhotoItem source={iconProps.club.clubImage.source} alt={iconProps.club.clubImage.alt} />
        </ClubImgDiv> */}
        <ClubNameDiv>
          <ClubName>{iconProps.club.clubName}</ClubName>
        </ClubNameDiv>
        <ClubDesDiv>
          <ClubDes>{iconProps.club.clubDescription}</ClubDes>
        </ClubDesDiv>
        <ClubTagsDiv>
          {iconProps.club.clubTags.map((tag, index) => {
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

function findClubs(type: string) {
  let completedData: ClubData[] = data
    .filter((clubType) => clubType.category === type)
    .map(({ name, description, tags }) => ({ clubName: name, clubDescription: description, clubTags: tags }));
  return completedData;
}

function Clubs(clubType: { type: string }) {
  // Finding the clubs related to the passed category.
  const clubs: ClubData[] = findClubs(clubType.type);
  console.log(clubs);
  return (
    <ClubsDiv>
      {clubs.map((club) => {
        return <ClubIcon type={clubType.type} club={club} />;
      })}
    </ClubsDiv>
  );
}

export default Clubs;
