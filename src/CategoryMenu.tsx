import React from 'react';

import { CategoryItem } from './data';
import styled from 'styled-components';
import HamIcon from './HamIcon';
import IconItem from './Icon';
import Icon from './Icon';
import { 
  IconButton, 
  Menu, 
  MenuButton,
  Portal,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

const MenuDiv = styled.div`
  grid-row: 1;
  grid-column: 1;
  transform: translate(15px, 90px); 
`

interface CategoryMenuProp {
  categoryList: CategoryItem[];
}

function CategoryMenu(props: CategoryMenuProp) {

  return (
    <MenuDiv>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HamIcon />}
        />
        <Portal>
          <MenuList>
            {props.categoryList.map((categoryItem, index) => {
              return <MenuItem key={index} icon={<Icon icon={categoryItem.categoryIcon} />}>{categoryItem.categoryName}</MenuItem>
            })}
          </MenuList>
        </Portal>
      </Menu>
    </MenuDiv>
  );
}

export default CategoryMenu;
