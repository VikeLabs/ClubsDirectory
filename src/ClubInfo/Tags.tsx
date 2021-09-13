import { ButtonGroup, Tag } from '@chakra-ui/react';
import styled from '@emotion/styled';

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
      <Tag borderRadius="full" size="lg">
        {props.tag}
      </Tag>
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
