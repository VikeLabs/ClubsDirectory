import React from 'react';
import styled from 'styled-components';

import ActionButton from '../Assets/components/Buttons';

import { Tag } from './data';

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

interface TagProps {
  tag: Tag;
}

const Button = styled(ActionButton)`
  width: 90%;
  grid-gap: 1em 1em;
  padding: 1em 2em 1em 1em;
`;

const gotoLink = async () => {
  /* function to navigate to the button url prop*/
};

function TagItem(props: TagProps) {
  return (
    <div className="tag-item">
      <Button variant="tagButton" onClick={gotoLink}>
        {props.tag.text}
      </Button>
      {/* <a href={props.tag.url}>{props.tag.text}</a> */}
    </div>
  );
}

interface TagListProps {
  tags: Tag[];
}

function TagList(props: TagListProps) {
  return (
    <Row className="tag-list">
      {props.tags.map((tag) => {
        return <TagItem tag={tag} />;
      })}
    </Row>
  );
}

export default TagList;
