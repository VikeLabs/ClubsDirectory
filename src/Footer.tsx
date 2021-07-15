import { Box, Flex } from '@chakra-ui/react';

export function Footer(): JSX.Element {
  return (
    <Box as="footer" width="100%">
      <Flex bg="#044259" minHeight="30px" maxH="88px"></Flex>
      <Flex bg="#1b8091" minHeight="60px" px="8"></Flex>
    </Box>
  );
}
