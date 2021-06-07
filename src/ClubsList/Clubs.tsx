import { IoIosArrowForward } from 'react-icons/io';

import DMTC_img from '../Assets/Images/DMTCIcon.png';
import HER_img from '../Assets/Images/HerClubIcon.png';
import IMPROV_img from '../Assets/Images/ImprovIcon.png';
import PEC_img from '../Assets/Images/PECClubListIcon.png';
import { ClubListData } from '../CustomProps';
import data from '../JSON/MockData.json';

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
} from './ClubListStyles';
import PhotoItem from './Photo';

function ClubIcon(iconProps: { club: ClubListData }) {
  return (
    // Linked button switches the page to the club info page when clicked.
    <LinkButton to={`/ClubCategories/ClubList/${iconProps.club.clubCategory}/${iconProps.club.clubName}`}>
      <ClubIconDiv>
        <ClubImgDiv>
          <PhotoItem source={iconProps.club.clubImage} alt={'Club Icon'} />
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

function randomIcon() {
  let possibleIcon = [HER_img, DMTC_img, PEC_img, IMPROV_img];
  let randomNumber = Math.floor(Math.random() * (3 - 0 + 1) + 0);
  console.log(randomNumber);
  return possibleIcon[randomNumber];
}

function findClubs(clubCategory: string) {
  let completedData: ClubListData[] = data
    .filter((clubType) => clubType.category === clubCategory)
    .map(({ name, description, tags }) => ({
      clubName: name,
      clubCategory: clubCategory,
      clubDescription: description,
      clubTags: tags,
      clubImage: randomIcon(),
    }));
  return completedData;
}

function Clubs(clubType: { category: string }) {
  // Finding the clubs related to the passed category.
  const clubs: ClubListData[] = findClubs(clubType.category);
  return (
    <ClubsDiv>
      {clubs.map((club) => {
        return <ClubIcon club={club} />;
      })}
    </ClubsDiv>
  );
}

export default Clubs;
