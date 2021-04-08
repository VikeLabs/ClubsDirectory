import React from 'react';
import styled from 'styled-components';
import { border, color, BorderProps, ColorProps } from 'styled-system';

import { Description } from './data';

interface Props extends ColorProps, BorderProps {
  children: React.ReactNode;
}

const Box = styled.div<Props>`
  ${color};
  ${border};
`;

interface DescProps {
  description: Description;
}

function DescriptionItem(props: DescProps) {
  return <Box color="#000">{props.description.text}</Box>;
}

export default DescriptionItem;
