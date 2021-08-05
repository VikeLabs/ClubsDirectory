import React from 'react';
import { IconType } from 'react-icons';
import styled from 'styled-components';

const IconItemDiv = styled.div`
  float: left;
  padding-right: 10px;
`;

export interface IconProps {
  icon: IconType;
}

function IconItem(props: IconProps) {
  var IconType = props.icon;
  return (
    <IconItemDiv className="icon-item">
      <IconType />
    </IconItemDiv>
  );
}

export default IconItem;
