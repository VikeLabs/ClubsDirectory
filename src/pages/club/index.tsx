import { Image } from '@chakra-ui/image';
import { Box, Center, Flex, Heading, Text } from '@chakra-ui/layout';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { CATEGORIES } from '../../categories';
import { LinkList } from '../../components/SocialMediaLinks';
import { Tags } from '../../components/Tags';
import { ClubData } from '../../JSON/ClubData';
import { findClubBySlug } from '../../JSON/helpers';
import { generateCategoryLink } from '../../links';
import { Error404Page } from '../error/404';

const imageSizes = ['150px', '150px', '150px', '150px'];

export function ClubImage({ slug }: { slug: string }): JSX.Element {
  const [src, setSrc] = useState<string | null>(`${process.env.PUBLIC_URL}/Logos/${slug}.png`);
  const handleError = () => {
    setSrc(null);
  };

  return (
    <Box minH={imageSizes} minW={imageSizes}>
      {src ? (
        <Image maxW={imageSizes} src={src} onError={handleError} objectFit="contain" />
      ) : (
        <Center h={imageSizes} w={imageSizes}>
          <pre>N/A</pre>
        </Center>
      )}
    </Box>
  );
}

function ClubHeader({ club }: { club: ClubData }) {
  return (
    <>
      <Breadcrumbs slug={club.category} name={club.name} />
      <Heading as="h1" size="2xl" my="6">
        {club.name}
      </Heading>
    </>
  );
}

function Description({ club }: { club: ClubData }) {
  return (
    <Box>
      <Box mb="4">
        <Tags tags={club.tags} />
      </Box>
      <Text>{club.description}</Text>
    </Box>
  );
}

function Breadcrumbs({ slug, name }: { slug: string; name: string }) {
  const categoryTitle = CATEGORIES.find((c) => c.slug === slug)?.fullTitle;
  return (
    <Box>
      <Link to="/categories">Categories</Link> / <Link to={generateCategoryLink(slug)}>{categoryTitle ?? ''}</Link> /{' '}
      {name}
    </Box>
  );
}

export function ClubPage() {
  // grab route params using react-router-dom
  const { slug } = useParams<{ category: string; slug: string }>();

  const club = findClubBySlug(slug);

  if (!club) return <Error404Page />;

  return (
    <Flex bg="white" p={['2', '2', '4', '8']} flexDirection={['column', 'column', 'column', 'row']}>
      <Box m={['1', '1', '2', '2']}>
        <Box display={['block', 'block', 'block', 'none']}>
          <ClubHeader club={club} />
        </Box>
        <Center my="2">
          <Box boxShadow="lg" borderRadius="lg" p="3">
            <ClubImage slug={slug} />
          </Box>
        </Center>
        <Box maxW={[null, null, null, '170px']}>
          <LinkList links={club.socialMedia} />
        </Box>
      </Box>
      <Box m="2">
        <Box display={['none', 'none', 'none', 'block']}>
          <ClubHeader club={club} />
        </Box>
        <Description club={club} />
      </Box>
    </Flex>
  );
}
