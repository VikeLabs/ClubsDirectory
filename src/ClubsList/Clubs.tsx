import { IoIosArrowForward } from 'react-icons/io';

import { ClubListData } from '../Assets/DataParsing/DataProps';
import { findShortClubInfo } from '../Assets/DataParsing/Parsing';

import {
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
} from './ClubListStyles';

interface ClubCardProps {
  club: ClubListData;
}

function ClubCard({ club }: ClubCardProps) {
  const url = `/categories/${club.clubCategory}/${club.clubName}`;
  return (
    // Linked button switches the page to the club info page when clicked.
    <LinkButton to={url}>
      <ClubIconDiv>
        <ClubImgDiv>
          <StyledPhoto source={club.clubImage} alt={'Club Icon'} />
        </ClubImgDiv>
        <ClubNameDiv>
          <ClubName>{club.clubName}</ClubName>
        </ClubNameDiv>
        <ClubDesDiv>
          <ClubDes>{club.clubDescription}</ClubDes>
        </ClubDesDiv>
        <ClubTagsDiv>
          {club.clubTags.map((tag, index) => {
            return (
              <StyledTag key={index} borderRadius="full">
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
    </LinkButton>
  );
}

function Clubs(clubType: { category: string }) {
  // Finding the clubs related to the passed category.
  const clubs = findShortClubInfo(clubType.category);
  return (
    <ClubsDiv>
      {clubs.map((club, index) => (
        <ClubCard key={index} club={club} />
      ))}
    </ClubsDiv>
  );
}

export default Clubs;
