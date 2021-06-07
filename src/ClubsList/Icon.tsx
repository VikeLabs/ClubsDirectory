import React from 'react';
import { IconType } from 'react-icons';

function IconItem(props: { icon: IconType }) {
  var IconType = props.icon;
  return (
    <div className="icon-item">
      <IconType />
    </div>
  );
}

export default IconItem;
