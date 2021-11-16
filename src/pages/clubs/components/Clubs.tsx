import { Image } from '@chakra-ui/image';
import { Box, Center, Flex, Heading, LinkBox, Text } from '@chakra-ui/layout';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

import { generateGroupLink } from '../../../data/links';
import { ClubData } from '../../../JSON/ClubData';
import { findClubsByCategory } from '../../../JSON/helpers';
import { Error404Page } from '../../error/404';

const ArrowIcon = () => (
  <IoIosArrowForward size={125} color="#74B7C1" style={{ stroke: 'lightgray', strokeWidth: '3' }} />
);

const imageSizes = ['64px', '100px', '125px', '150px'];

function ClubImage({ slug }: { slug: string }): JSX.Element {
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

function Card({ club }: { club: ClubData }): JSX.Element {
  return (
    <Box bg="white" borderRadius="2xl" boxShadow="xl" p={2} maxW="900px">
      <Flex justifyContent="space-between">
        <Flex alignItems="center">
          <Box p="2">
            <ClubImage slug={club.slug} />
          </Box>
          <Box flexGrow="unset">
            <Heading fontSize={['md', 'lg', 'xl', '2xl']}>{club.name}</Heading>
            <Box ml={['0', '2', '6', '6']}>
              <Text noOfLines={[2, 2, 3, 3]}>{club.description}</Text>
              <Flex mt="2">
                {club.tags.map((tag: string) => (
                  <Box bg="brand.light" width="fit-content" py="0.5" px="4" mr="1" borderRadius="lg">
                    <Text fontSize="0.75em">{tag}</Text>
                  </Box>
                ))}
              </Flex>
            </Box>
          </Box>
        </Flex>
        <Box
          display={{
            base: 'none',
            sm: 'none',
            md: 'none',
            lg: 'flex',
            xl: 'flex',
          }}
          alignItems="center"
        >
          <ArrowIcon />
        </Box>
      </Flex>
    </Box>
  );
}

export function Clubs({ categorySlug }: { categorySlug: string }): JSX.Element {
  const clubs = findClubsByCategory(categorySlug);

  if (!clubs) return <Error404Page />;
  return (
    <Box ml={['1', '2', '6', '24']} mr="2">
      {clubs.map((club) => (
        <LinkBox as={Link} key={club.slug} to={generateGroupLink(club.category, club.slug)}>
          <Box my={['2', '2', '3', '4']}>
            <Card club={club} />
          </Box>
        </LinkBox>
      ))}
    </Box>
  );
}
