import React from 'react';

import './CategoryButton.css';
import { Category } from './categoryData';

interface CategoryProps {
  category: Category;
  updateCategory: (category: Category) => void;
}

function CategoryItem(props: CategoryProps) {
  return (
    <button className="category-item">
      <p>{props.category.title}</p>
    </button>
  );
}

interface ListProps {
  items: Category[];
  updateCategory: (category: Category, index: number) => void;
}

function CategoryList(props: ListProps) {
  return (
    <div className="category-list">
      {props.items.map((category, index) => (
        <CategoryItem category={category} updateCategory={(category) => props.updateCategory(category, index)} />
      ))}
    </div>
  );
}

export default CategoryList;
