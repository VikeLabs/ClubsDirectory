import React from 'react';

import { Link } from './data';

interface LinkProps {
  link: Link;
}

function LinkItem(props: LinkProps) {
  return (
    <div className="link-item">
      <img src={props.link.logo.source} alt={props.link.logo.alt}></img>
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
