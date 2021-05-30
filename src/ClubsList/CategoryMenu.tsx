import { IconButton, Menu, MenuButton, Portal, MenuList, MenuItem } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

import { LinkButton } from './ClubListStyles';

import { CategoryItem } from './ClubListData';
import HamIcon from './HamIcon';
import Icon from './Icon';

const MenuDiv = styled.div`
  grid-row: 1;
  grid-column: 1;
  transform: translate(15px, 90px);
`;

interface CategoryMenuProp {
  categoryList: CategoryItem[];
}

function CategoryMenu(props: CategoryMenuProp) {
  return (
    <MenuDiv>
      <Menu>
        <MenuButton as={IconButton} icon={<HamIcon />} />
        <Portal>
          <MenuList>
            {props.categoryList.map((categoryItem, index) => {
              return (
                <LinkButton to={`/ClubCategories/ClubList/${categoryItem.categoryShortName} Club`}>
                  <MenuItem key={index} icon={<Icon icon={categoryItem.categoryIcon} />}>
                    {categoryItem.categoryName}
                  </MenuItem>
                </LinkButton>
              );
            })}
          </MenuList>
        </Portal>
      </Menu>
    </MenuDiv>
  );
}

export default CategoryMenu;
