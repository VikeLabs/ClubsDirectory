import { Box, Heading } from '@chakra-ui/layout';
import styled from '@emotion/styled';
import { useParams } from 'react-router';

import CompletedBackground from '../../Assets/Images/CompletedBackground.png';
import MobileBackground from '../../Assets/Images/MobileBackground.png';
import { CATEGORIES } from '../../categories';
import { Error404Page } from '../error/404';

import { Clubs } from './components/Clubs';
import { CategoryHeader } from './components/Header';

export function ClubsPage(): JSX.Element {
  const { category: categorySlug } = useParams<{ category: string }>();
  // find the full category (none slug form). if slug is invalid this will return undefined
  const categoryTitle = CATEGORIES.find((c) => c.slug === categorySlug)?.fullTitle;

  if (!categoryTitle) return <Error404Page />;

  const path = `Categories / ${categoryTitle}`;

  return (
    <Box
      bgImage={[MobileBackground, MobileBackground, MobileBackground, 'none']}
      bgRepeat="no-repeat"
      bgSize="100% auto"
    >
      <CategoryHeader title={categoryTitle} path={path} />
      <Clubs categorySlug={categorySlug} />
    </Box>
  );
}
