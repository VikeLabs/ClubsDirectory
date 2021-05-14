import { Button, ButtonGroup } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

import { Tag } from './data';

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

interface TagProps {
  tag: Tag;
}

const gotoLink = async () => {
  /* function to navigate to the button url prop*/
};

function TagItem(props: TagProps) {
  return (
    <div>
      <Button colorScheme="blue" size="md" variant="ghost" border="1px">
        {props.tag.text}
      </Button>
    </div>
  );
}

interface TagListProps {
  tags: Tag[];
}

function TagList(props: TagListProps) {
  return (
    <ButtonGroup variant="solid" spacing="3">
      {props.tags.map((tag) => {
        return <TagItem tag={tag} />;
      })}
    </ButtonGroup>
  );
}

export default TagList;
