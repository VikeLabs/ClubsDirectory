import CategoryButtonMatrix from './CategoryButtonMatrix';
import { CategoryDiv } from './ClubCategoryStyles';

export function CategoryPage(): JSX.Element {
  return (
    <CategoryDiv>
      {/* Component containg the grid of buttons for each club category */}
      <CategoryButtonMatrix />
    </CategoryDiv>
  );
}
