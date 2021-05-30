import React from 'react';

import { Link } from './ClubInfoData';
import Icon from './Icon';

interface LinkProps {
  link: Link;
}

function LinkItem(props: { link: string }) {
  return (
    <div className="link-item">
      {/* <Icon icon={props.link.logo}></Icon> */}
      <p>{props.link}</p>
    </div>
  );
}

function LinkList(props: { links: string[] }) {
  return (
    <ul className="link-list">
      {props.links.map((link) => {
        return <LinkItem link={link} />;
      })}
    </ul>
  );
}

export default LinkList;
