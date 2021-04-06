import React, { useState } from 'react';

import CategoryButtonMatrix from './CategoryButtonMatrix';
import './Assets/CSS/CategoryButton.css';
import { defaultCategory, Category } from './categoryData';

function CategoryPage() {
  const [categories, setCategory] = useState(defaultCategory);

  function updateCategory(category: Category, index: number) {
    const newCategories = [...categories];
    newCategories[index] = category;
    setCategory(newCategories);
  }

  return (
    <div className="category-matrix">
      <CategoryButtonMatrix items={categories} updateCategory={updateCategory} />
    </div>
  );
}
export default CategoryPage;
