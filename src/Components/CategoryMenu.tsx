import React from 'react';

import { CategoryItem } from './../data';

interface CategoryItemProp {
  categoryItem: CategoryItem;
}

function CategoryListItem(props: CategoryItemProp) {
  return (
    <li>
      <strong>{props.categoryItem.categoryName}</strong>
      <ul>
        {props.categoryItem.clubs.map((clubname) => {
          return <li>{clubname}</li>;
        })}
      </ul>
    </li>
  );
}

interface CategoryMenuProp {
  categoryList: CategoryItem[];
}

function CategoryMenu(props: CategoryMenuProp) {
  return (
    <ul>
      {props.categoryList.map((categoryItem) => {
        return <CategoryListItem categoryItem={categoryItem} />;
      })}
    </ul>
  );
}

export default CategoryMenu;
