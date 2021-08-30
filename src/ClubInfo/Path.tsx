import { Link } from 'react-router-dom';

function PathItem(props: { category: string; clubName: string }) {
  return (
    <div>
      {/* TODO: remove lowercase */}
      <Link to="/categories">Club Categories / </Link>
      <Link to={`/categories/${props.category.toLowerCase()}`}>{props.category}</Link> / {props.clubName}
    </div>
  );
}

export default PathItem;
