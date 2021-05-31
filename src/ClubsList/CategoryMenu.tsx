import { IconButton, Menu, MenuButton, Portal, MenuList, MenuItem } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

import { CategoryItem } from './ClubListData';
import { LinkButton } from './ClubListStyles';
import HamIcon from './HamIcon';
import Icon from './Icon';

const MenuDiv = styled.div`
  grid-row: 1;
  grid-column: 1;
  margin-left: 20px;
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
              if (categoryItem.categoryName == 'Home') {
                return (
                  <LinkButton to="/ClubCategories">
                    <MenuItem key={index} icon={<Icon icon={categoryItem.categoryIcon} />}>
                      {categoryItem.categoryName}
                    </MenuItem>
                  </LinkButton>
                );
              }
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
