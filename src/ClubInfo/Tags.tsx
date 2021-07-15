import { Button, ButtonGroup } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

import { Tag } from './data';

const TagListDiv = styled.div`
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    display: none;
  }
  grid-area: tags;
  text-align: left;
  margin: 0 0 10px 10px;
`;

interface TagProps {
  tag: string;
}

function TagItem(props: TagProps) {
  return (
    <div>
      <Button colorScheme="blue" size="md" variant="ghost" border="1px">
        {props.tag}
      </Button>
    </div>
  );
}

interface TagListProps {
  tags: string[];
}

function TagList(props: TagListProps) {
  return (
    <TagListDiv>
      <ButtonGroup variant="solid" spacing="3">
        {props.tags.map((tag) => {
          return <TagItem tag={tag} />;
        })}
      </ButtonGroup>
    </TagListDiv>
  );
}

export default TagList;
