import { Box, Flex, LinkBox } from '@chakra-ui/react';

import { ReactComponent as Logo } from '../uvss.svg';

// Implements a mocked-out version of the header on the UVSS homepage. Not meant to be a 1:1 replica
export function Header(): JSX.Element {
  return (
    <Box as="header" position="fixed" top="0" width="100%" maxWidth="1130px" boxShadow="md" zIndex="1">
      <Flex bg="brand.secondary" minHeight="30px" alignItems="center"></Flex>
      <Flex
        bg="brand.primary"
        minHeight="60px"
        alignItems="center"
        justifyContent="space-between"
        pl={['2', '6', '12']}
      >
        <LinkBox as="a" href="https://uvss.ca">
          <Logo height="50px" />
        </LinkBox>
      </Flex>
    </Box>
  );
}
