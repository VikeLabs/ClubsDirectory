import { Box, Flex, Text } from '@chakra-ui/layout';

export function Tags({ tags }: { tags: string[] }) {
  return (
    <Flex>
      {tags.map((tag: string) => (
        <Box bg="brand.light" width="fit-content" py="0.5" px="4" mr="1" borderRadius="lg">
          <Text fontSize="0.75em">{tag}</Text>
        </Box>
      ))}
    </Flex>
  );
}
