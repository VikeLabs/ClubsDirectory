import React from 'react';
import styled from 'styled-components';

import { Icon } from './data';

const IconItemDiv = styled.div`
  float: left;
  padding-right: 10px;
`;

export interface IconProps {
  icon: Icon;
}

function IconItem(props: IconProps) {
  var IconType = props.icon.icon;
  return (
    <IconItemDiv className="icon-item">
      <IconType />
    </IconItemDiv>
  );
}

export default IconItem;
