import React from 'react';
import './ClubInfoStyles.css';
import { IconType } from 'react-icons/lib';

function IconItem(props: { icon: IconType }) {
  var IconType = props.icon;
  return (
    <div className="icon-item">
      <IconType />
    </div>
  );
}

export default IconItem;
