import React, { useState } from 'react';

import CategoryButtonMatrix from './CategoryButtonMatrix';

function CategoryPage() {
  return (
    <div>
      {/* Component containg the grid of buttons for each club category */}
      <CategoryButtonMatrix />
    </div>
  );
}
export default CategoryPage;
