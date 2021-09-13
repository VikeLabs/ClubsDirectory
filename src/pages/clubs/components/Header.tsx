import { IconButton } from '@chakra-ui/button';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { FaHome } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import { CATEGORIES } from '../../../categories';
import Icon from '../../../ClubInfo/Icon';
import { LinkButton } from '../../../ClubsCategories/ClubCategoryStyles';
import { generateCategoryLink } from '../../../links';

const HomeIcon = () => (
  <Box pr="10px">
    <FaHome />
  </Box>
);

function CategoriesMenu() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<GiHamburgerMenu size={'2em'} />}
        color={['black', 'black', 'black', 'white']}
        bg="none"
      />
      <MenuList>
        <LinkButton to="/">
          <MenuItem icon={<HomeIcon />}>Home</MenuItem>
        </LinkButton>
        {CATEGORIES.map((category, index) => (
          <LinkButton key={index} to={generateCategoryLink(category.slug)}>
            <MenuItem icon={<Icon icon={category.icon} />}>{category.shortTitle}</MenuItem>
          </LinkButton>
        ))}
      </MenuList>
    </Menu>
  );
}

export function CategoryHeader({ path, title }: { path: string; title: string }): JSX.Element {
  return (
    <Flex justifyContent="space-between" alignItems="center" mx="4">
      <Flex justifyContent="space-between" alignItems="baseline">
        <Flex>
          <CategoriesMenu />
        </Flex>
        <Heading as="h1" size="2xl" color={['black', 'black', 'black', 'white']} py={[2, 3, 4, 7]} pl="4">
          {title}
        </Heading>
      </Flex>
      <Text fontWeight="semibold" color={['black', 'black', 'black', 'white']}>
        {path}
      </Text>
    </Flex>
  );
}
