import { Button, ButtonGroup } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const gotoLink = async () => {
  /* function to navigate to the button url prop*/
};

function TagItem(props: { tag: string }) {
  return (
    <div>
      <Button colorScheme="blue" size="md" variant="ghost" border="1px">
        {props.tag}
      </Button>
    </div>
  );
}

function TagList(props: { tags: string[] }) {
  return (
    <ButtonGroup variant="solid" spacing="3">
      {props.tags.map((tag) => {
        return <TagItem tag={tag} />;
      })}
    </ButtonGroup>
  );
}

export default TagList;
