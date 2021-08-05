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

function ClubIcon(iconProps: { club: ClubListData }) {
  return (
    // Linked button switches the page to the club info page when clicked.
    <LinkButton to={`/ClubCategories/ClubList/${iconProps.club.clubCategory}/${iconProps.club.clubName}`}>
      <ClubIconDiv>
        <ClubImgDiv>
          <StyledPhoto source={iconProps.club.clubImage} alt={'Club Icon'} />
        </ClubImgDiv>
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
    </LinkButton>
  );
}

function Clubs(clubType: { category: string }) {
  // Finding the clubs related to the passed category.
  const clubs: ClubListData[] = findShortClubInfo(clubType.category);
  return (
    <ClubsDiv>
      {clubs.map((club) => {
        return <ClubIcon club={club} />;
      })}
    </ClubsDiv>
  );
}

export default Clubs;
