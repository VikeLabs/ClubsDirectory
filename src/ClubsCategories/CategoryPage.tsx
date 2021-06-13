import React from 'react';

import CategoryButtonMatrix from './CategoryButtonMatrix';
import { CategoryDiv } from './ClubCategoryStyles';

function CategoryPage() {
  return (
    <CategoryDiv>
      {/* Component containg the grid of buttons for each club category */}
      <CategoryButtonMatrix />
    </CategoryDiv>
  );
}
export default CategoryPage;
