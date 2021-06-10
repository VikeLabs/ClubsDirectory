import React from 'react';
import styled from 'styled-components';

import { Link } from './data';
import Icon from './Icon';

const LinkListDiv = styled.ul`
  grid-area: links;
  text-align: left;
  margin: 10px 0 0 15%;
`;

interface LinkProps {
  link: Link;
}

function LinkItem(props: LinkProps) {
  return (
    <div>
      <Icon icon={props.link.logo}></Icon>
      <p>{props.link.url}</p>
    </div>
  );
}

interface LinkListProps {
  links: Link[];
}

function LinkList(props: LinkListProps) {
  return (
    <LinkListDiv>
      {props.links.map((link) => {
        return <LinkItem link={link} />;
      })}
    </LinkListDiv>
  );
}

export default LinkList;
