import React from 'react';

import './ClubInfoStyles.css';
import { Icon } from './ClubInfoData';

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
