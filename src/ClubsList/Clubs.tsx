import { IoIosArrowForward } from 'react-icons/io';

import Logo from '../Assets/Images/Vike_Labs_Icon.png';
import { ClubData } from '../JSON/ClubData';
import { findClubsByCategory } from '../JSON/helpers';
import { Error404Page } from '../pages/error/404';

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
  club: ClubData;
}

function ClubCard({ club }: ClubCardProps) {
  const url = `/categories/${club.category}/${club.slug}`;
  return (
    // Linked button switches the page to the club info page when clicked.
    <LinkButton to={url}>
      <ClubIconDiv>
        <ClubImgDiv>
          {/* TODO: Replace with actual logo */}
          <StyledPhoto source={Logo} alt={'Club Icon'} />
        </ClubImgDiv>
        <ClubNameDiv>
          <ClubName>{club.name}</ClubName>
        </ClubNameDiv>
        <ClubDesDiv>
          <ClubDes>{club.description}</ClubDes>
        </ClubDesDiv>
        <ClubTagsDiv>
          {club.tags.map((tag, index) => {
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

function Clubs({ category: categorySlug }: { category: string }) {
  // Finding the clubs related to the passed category.
  const clubs = findClubsByCategory(categorySlug);

  if (!clubs) return <Error404Page />;

  return (
    <ClubsDiv>
      {clubs.map((club, index) => (
        <ClubCard key={index} club={club} />
      ))}
    </ClubsDiv>
  );
}

export default Clubs;
