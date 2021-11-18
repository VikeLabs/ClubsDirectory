import styled from '@emotion/styled';
import { ComponentType } from 'react';

const IconItemDiv = styled.div`
  float: left;
  padding-right: 10px;
`;

export interface IconProps {
  icon: ComponentType;
}

export function IconItem(props: IconProps) {
  const IconType = props.icon;
  return (
    <IconItemDiv>
      <IconType />
    </IconItemDiv>
  );
}
