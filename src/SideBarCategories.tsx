import React from 'react';

import { Category } from './categoryData';
import './Assets/CSS/SideBarButton.css';

interface CategoryProps {
  category: Category;
  updateCategory: (category: Category) => void;
}

function SidebarItem(props: CategoryProps) {
  return (
    <div>
      <button className="sidebar-dropdown">
        <p>{props.category.title}</p>
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
        <p>Texts</p>
      </div>
    </div>
  );
}

interface ListProps {
  items: Category[];
  updateCategory: (category: Category, index: number) => void;
}

function SideBarCategories(props: ListProps) {
  return (
    <div className="sidebar-buttons">
      {props.items.map((category, index) => (
        <SidebarItem category={category} updateCategory={(category) => props.updateCategory(category, index)} />
      ))}
    </div>
  );
}
export default SideBarCategories;
