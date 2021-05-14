import React from 'react';

import { Link } from './data';
import Icon from './Icon';

interface LinkProps {
  link: Link;
}

function LinkItem(props: LinkProps) {
  return (
    <div className="link-item">
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
    <ul className="link-list">
      {props.links.map((link) => {
        return <LinkItem link={link} />;
      })}
    </ul>
  );
}

export default LinkList;
