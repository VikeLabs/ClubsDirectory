import React from 'react';

import { CategoryItem } from './data';
import styled from 'styled-components';
import { GiPaintBrush } from 'react-icons/gi';
import HamIcon, { HamIconDiv } from './HamIcon';
import ActionButton from './Assets/Styling/Buttons'

const CategoryContent = styled.div`
  display: none;
  position: absolute;
  margin-left: 30px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 7px;
  padding: 7px 0px 7px 0px;
`

const CategoryMenuDiv = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${CategoryContent} {
    display: block;
  }
  &:hover ${HamIconDiv}{
    background-color: #125864;
  } 
`
const ClubNameList = styled.div`
  display: none;
`
const CategoryItemDiv = styled.div`
  &:hover ${ClubNameList} {
    display: table;
  }
`

const CategoryName = styled(ActionButton)`
  padding: 12px 15px;
  display: block;
  &:hover {
    background-color: #bbb9b9;
  }
`

const ClubName = styled(ActionButton)`
  display: list-item;
  list-style-type: none;
  padding-left: 24px;
  &:hover {
    background-color:#bbb9b9;
  }
`
interface CategoryItemProp {
  categoryItem: CategoryItem;
}

const gotoLink = async () => {
  /* function to navigate to the button url prop*/
};

function CategoryListItem(props: CategoryItemProp) {
  // Need to import club category icon instead of GiPaintBrush tag
  return (
    <CategoryItemDiv>
      <CategoryName variant="sideBarButton" onClick={gotoLink}>
        <GiPaintBrush /> 
        <b>{props.categoryItem.categoryName}</b>
      </CategoryName>
      <ClubNameList>
        {props.categoryItem.clubs.map((clubname, index) => {
          return <ClubName variant="sideBarButton" onClick={gotoLink} key={index}>{clubname}</ClubName>;
        })}
      </ClubNameList>
    </CategoryItemDiv>
  );
}

interface CategoryMenuProp {
  categoryList: CategoryItem[];
}

function CategoryMenu(props: CategoryMenuProp) {

  return (
    <CategoryMenuDiv>
      <HamIcon/> 
      <CategoryContent>        
          {props.categoryList.map((categoryItem, index) => {
            return <CategoryListItem categoryItem={categoryItem} key={index}/>;
          })}        
      </CategoryContent>
    </CategoryMenuDiv>
  );
}

export default CategoryMenu;
