import React, { useState } from 'react';

import { defaultCategory, Category } from './categoryData';
import CategoryList from './CategoryList';

function CategoryPage() {
  const [categories, setCategory] = useState(defaultCategory);

  function updateCategory(category: Category, index: number) {
    const newCategories = [...categories];
    newCategories[index] = category;
    setCategory(newCategories);
  }

  return (
    <div className="category-page">
      <CategoryList items={categories} updateCategory={updateCategory} />
    </div>
  );
}
export default CategoryPage;
