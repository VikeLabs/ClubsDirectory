import { useParams } from 'react-router-dom';

import { CATEGORIES } from '../categories';

import { ClubPageDiv } from './ClubListStyles';
import Clubs from './Clubs';
import TitleItem from './Title';

function ClubListPage() {
  // route param. ie. culture, sports, etc.
  const { category } = useParams<{ category: string }>();
  const fullTitle = CATEGORIES.find((c) => c.slug === category)?.fullTitle;

  if (!fullTitle) {
    // TODO: 404 page
    return <div>No category found</div>;
  }

  const path = `Categories / ${fullTitle}`;

  return (
    <ClubPageDiv>
      <TitleItem categoryName={fullTitle} directoryName={path} />
      <Clubs category={fullTitle} />
    </ClubPageDiv>
  );
}

export default ClubListPage;
