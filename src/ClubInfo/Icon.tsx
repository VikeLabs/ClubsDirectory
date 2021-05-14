import React from 'react';

import './icon.css';
import { Icon } from './data';

export interface IconProps {
  icon: Icon;
}

function IconItem(props: IconProps) {
  var IconType = props.icon.icon;
  return (
    <div className="icon-item">
      <IconType />
    </div>
  );
}

export default IconItem;
