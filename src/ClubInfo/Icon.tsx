import React, { ComponentType } from 'react';
import styled from 'styled-components';

const IconItemDiv = styled.div`
  float: left;
  padding-right: 10px;
`;

export interface IconProps {
  icon: ComponentType;
}

function IconItem(props: IconProps) {
  const IconType = props.icon;
  return (
    <IconItemDiv>
      <IconType />
    </IconItemDiv>
  );
}

export default IconItem;
