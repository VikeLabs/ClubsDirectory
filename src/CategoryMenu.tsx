import React from 'react';

import { CategoryItem } from './data';
import styled from 'styled-components';
import { GiPaintBrush } from 'react-icons/gi';

const HamIcon = styled.div`
  display: inline-block;
  cursor: pointer;
  margin-left: 30px;
  padding: 3px 5px;
  border-radius: 5px;
`


const HamBar = styled.div`
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;
  border-radius:2px;
`

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
  &:hover ${HamIcon} {
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

const CategoryName = styled.a`
  padding: 12px 15px;
  display: block;
  &:hover {
    background-color: #bbb9b9;
  }
`

const ClubName = styled.a`
  display: list-item;
  padding-left: 24px;
  &:hover {
    background-color:#bbb9b9;
  }
`
interface CategoryItemProp {
  categoryItem: CategoryItem;
}

function CategoryListItem(props: CategoryItemProp) {
  return (
    <CategoryItemDiv>
      <CategoryName>
        <GiPaintBrush />
        <b>{props.categoryItem.categoryName}</b>
      </CategoryName>
      <ClubNameList>
        {props.categoryItem.clubs.map((clubname) => {
          return <ClubName>{clubname}</ClubName>;
        })}
      </ClubNameList>
    </CategoryItemDiv>
  );
}

interface CategoryMenuProp {
  categoryList: CategoryItem[];
}

function CategoryMenu(props: CategoryMenuProp) {
  function hamIconClick() {
    console.log('The HamIcon Was Clicked');
  }
  return (
    <CategoryMenuDiv>
      <HamIcon onClick={hamIconClick}>
        <HamBar></HamBar>
        <HamBar></HamBar>
        <HamBar></HamBar>
      </HamIcon>
      <CategoryContent>        
          {props.categoryList.map((categoryItem) => {
            return <CategoryListItem categoryItem={categoryItem} />;
          })}        
      </CategoryContent>
    </CategoryMenuDiv>
  );
}

export default CategoryMenu;
