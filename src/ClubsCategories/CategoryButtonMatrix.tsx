import React, { useState } from 'react';

import { Category, defaultCategory } from './CategoryData';
import { Grid, Gridbutton, CategoryTitle, ButtonIcon, ButtonLabel, LinkButton } from './MatrixStyledComponents';

interface CategoryProps {
  category: Category;
}

function CategoryItem(props: CategoryProps) {
  // Retreiveing the short hand category title and icon from the CategoryData.tsx
  var title = props.category.ShortTitle;
  var IconImage = props.category.icon;
  return (
    // Linking each grid button to their corresponding page.
    <LinkButton to={`/ClubCategories/ClubList/${title} Club`}>
      <Gridbutton>
        <ButtonIcon>
          <IconImage />
        </ButtonIcon>
        <ButtonLabel>{title}</ButtonLabel>
      </Gridbutton>
    </LinkButton>
  );
}

function CategoryButtonMatrix() {
  // Array for storing all the category data.
  const [categoies] = useState(defaultCategory);
  return (
    <div>
      <CategoryTitle>Club Categories</CategoryTitle>
      <Grid>
        {categoies.map((category) => (
          // Creating all the category buttons to be displayed in the grid.
          <CategoryItem category={category} />
        ))}
      </Grid>
    </div>
  );
}

export default CategoryButtonMatrix;
