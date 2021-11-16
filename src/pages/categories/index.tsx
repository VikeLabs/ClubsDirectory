import { CategoryButtonMatrix } from './components/CategoryButtonMatrix';
import { CategoryDiv } from './components/ClubCategoryStyles';

export function CategoryPage(): JSX.Element {
  return (
    <CategoryDiv>
      {/* Component containg the grid of buttons for each club category */}
      <CategoryButtonMatrix />
    </CategoryDiv>
  );
}
