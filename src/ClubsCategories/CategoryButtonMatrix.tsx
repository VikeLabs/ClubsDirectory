import React, { useState } from 'react';

import { Category, Categories } from './CategoryData';
import { Grid, Gridbutton, CategoryTitle, ButtonIcon, ButtonLabel, LinkButton } from './ClubCategoryStyles';

interface CategoryProps {
  category: Category;
}

// CategoryItem is a function that takes in the Category interface(See CategoryData.tsx) as a prop.
// The function then extracts the short form name and the icon associated with the category and
// displays it as a button, and links to the respective club listing page.
function CategoryItem(props: CategoryProps) {
  // Extracting the short hand category title and icon from the passed prop.
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
  const [categoies] = useState(Categories);
  return (
    <div>
      <CategoryTitle>Club Categories</CategoryTitle>
      <Grid>
        {categoies.map((category) => (
          // Creating buttons for each item in the categories array.
          <CategoryItem category={category} />
        ))}
      </Grid>
    </div>
  );
}

export default CategoryButtonMatrix;
