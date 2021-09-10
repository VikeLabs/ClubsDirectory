import { IconButton, Menu, MenuButton, Portal, MenuList, MenuItem, Box } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import styled from 'styled-components';

import { Category } from '../categories';

import Icon from './../ClubInfo/Icon';
import { LinkButton } from './ClubListStyles';
import HamIcon from './HamIcon';

const MenuDiv = styled.div`
  grid-row: 1;
  grid-column: 1;
  margin-left: 20px;
`;

const HomeIcon = () => (
  <Box pr="10px">
    <FaHome />
  </Box>
);

interface CategoryMenuProp {
  categoryList: Category[];
}

function CategoryMenu({ categoryList }: CategoryMenuProp) {
  return (
    <MenuDiv>
      <Menu>
        <MenuButton as={IconButton} icon={<HamIcon />} />
        <Portal>
          <MenuList>
            <LinkButton to="/">
              <MenuItem icon={<HomeIcon />}>Home</MenuItem>
            </LinkButton>
            {categoryList.map((category, index) => (
              <LinkButton key={index} to={`/categories/${category.slug}`}>
                <MenuItem icon={<Icon icon={category.icon} />}>{category.shortTitle}</MenuItem>
              </LinkButton>
            ))}
          </MenuList>
        </Portal>
      </Menu>
    </MenuDiv>
  );
}

export default CategoryMenu;
