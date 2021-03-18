import React from 'react';

import { Tag } from './data';

interface TagProps {
  tag: Tag;
}

function TagItem(props: TagProps) {
  return (
    <div className="tag-item">
      <a href={props.tag.url}>{props.tag.text}</a>
    </div>
  );
}

interface TagListProps {
  tags: Tag[];
}

function TagList(props: TagListProps) {
  return (
    <ul className="tag-list">
      {props.tags.map((tag) => {
        return <TagItem tag={tag} />;
      })}
    </ul>
  );
}

export default TagList;
