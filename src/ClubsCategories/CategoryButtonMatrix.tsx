import { CATEGORIES, Category } from '../categories';
import { generateCategoryLink } from '../links';

import { Grid, Gridbutton, CategoryTitle, ButtonIcon, ButtonLabel, LinkButton } from './ClubCategoryStyles';

interface CategoryProps {
  category: Category;
}

// CategoryItem is a function that takes in the Category interface(See CategoryData.tsx) as a prop.
// The function then extracts the short form name and the icon associated with the category and
// displays it as a button, and links to the respective club listing page.
function CategoryItem(props: CategoryProps) {
  // Extracting the short hand category title and icon from the passed prop.
  const title = props.category.shortTitle;
  const IconImage = props.category.icon;
  return (
    // Linking each grid button to their corresponding page.
    <LinkButton to={generateCategoryLink(props.category.slug)}>
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
  return (
    <>
      <CategoryTitle>Club Categories</CategoryTitle>
      <Grid>
        {CATEGORIES.map((category, index) => (
          // Creating buttons for each item in the categories array.
          <CategoryItem key={index} category={category} />
        ))}
      </Grid>
    </>
  );
}

export default CategoryButtonMatrix;
