import { useParams } from 'react-router-dom';

import { CATEGORIES } from '../categories';
import { Error404Page } from '../pages/error/404';

import { ClubPageDiv } from './ClubListStyles';
import Clubs from './Clubs';
import TitleItem from './Title';

function ClubListPage() {
  // route param. ie. culture, sports, etc.
  const { category: categorySlug } = useParams<{ category: string }>();

  // find the full category (none slug form). if slug is invalid this will return undefined
  const categoryTitle = CATEGORIES.find((c) => c.slug === categorySlug)?.fullTitle;

  if (!categoryTitle) return <Error404Page />;

  const path = `Categories / ${categoryTitle}`;

  return (
    <ClubPageDiv>
      <TitleItem categoryName={categoryTitle} directoryName={path} />
      <Clubs category={categorySlug} />
    </ClubPageDiv>
  );
}

export default ClubListPage;
