import { CATEGORIES, Category } from '../../../data/categories';
import { generateCategoryLink } from '../../../data/links';

import { Grid, Gridbutton, CategoryTitle, ButtonIcon, ButtonLabel, LinkButton } from './ClubCategoryStyles';

interface CategoryProps {
  category: Category;
}

// CategoryItem is a function that takes in the Category interface(See CategoryData.tsx) as a prop.
// The function then extracts the short form name and the icon associated with the category and
// displays it as a button, and links to the respective club listing page.
const CategoryItem = ({ category: { shortTitle, icon: IconImage, slug } }: CategoryProps) => (
  // Linking each grid button to their corresponding page.
  <LinkButton to={generateCategoryLink(slug)}>
    <Gridbutton>
      <ButtonIcon>
        <IconImage />
      </ButtonIcon>
      <ButtonLabel>{shortTitle}</ButtonLabel>
    </Gridbutton>
  </LinkButton>
);

export const CategoryButtonMatrix = () => (
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
