import React, { useState } from 'react';

import { defaultCategory, Category } from './categoryData';
import SideBarCategories from './SideBarCategories';

function Sidebar() {
  const [categories, setCategory] = useState(defaultCategory);

  function updateCategory(category: Category, index: number) {
    const newCategories = [...categories];
    newCategories[index] = category;
    setCategory(newCategories);
  }

  return (
    <div className="sidebar-nav">
      <SideBarCategories items={categories} updateCategory={updateCategory} />
    </div>
  );
}
export default Sidebar;
