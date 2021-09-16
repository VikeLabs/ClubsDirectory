import { Link } from 'react-router-dom';

import { CATEGORIES } from '../categories';
import { generateCategoryLink } from '../links';

function PathItem(props: { category: string; clubName: string }) {
  const categoryTitle = CATEGORIES.find((c) => c.slug === props.category)?.fullTitle;
  return (
    <div>
      {/* TODO: remove lowercase */}
      <Link to="/categories">Club Categories / </Link>
      <Link to={generateCategoryLink(props.category)}>{categoryTitle ?? ''}</Link> / {props.clubName}
    </div>
  );
}

export default PathItem;
