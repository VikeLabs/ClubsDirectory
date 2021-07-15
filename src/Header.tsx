import { Box, Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

const headingTitles = ['ABOUT', 'EVENTS', 'HEALTH & DENTAL', 'RESOURCES', 'SERVICES', 'JOBS', 'CONTACT'];

// Implements a mocked-out version of the header on the UVSS homepage. Not meant to be a 1:1 replica
export function Header(): JSX.Element {
  const [isMobile] = useMediaQuery('(min-width: 990px)');
  return (
    <Box as="header" position="fixed" top="0" width="100%" maxWidth="1130px" boxShadow="md" zIndex="">
      <Flex bg="brand.secondary" minHeight="30px" alignItems="center"></Flex>
      <Flex bg="brand.primary" minHeight="60px" alignItems="center" justifyContent="space-between" px="8">
        <Heading color="white">UVSS</Heading>
        {isMobile ? (
          <Flex as="nav" alignItems="center">
            {headingTitles.map((title) => (
              <Text color="white" key={title} mx="1.5">
                {title}
              </Text>
            ))}
            <AiOutlineSearch color="white" />
          </Flex>
        ) : (
          <GiHamburgerMenu color="white" size="2em" />
        )}
      </Flex>
    </Box>
  );
}
