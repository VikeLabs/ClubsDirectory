import React from 'react';
import styled from 'styled-components';
import { border, color, BorderProps, ColorProps } from 'styled-system';

import { Description } from './data';

interface Props extends ColorProps, BorderProps {
  children: React.ReactNode;
}

const Box = styled.div<Props>`
  @media screen and (max-width: 768px) {
    margin: 0;
  }
  ${color};
  ${border};
  grid-area: description;
  text-align: left;
  margin: 10px 0 10px 10px;
`;

interface DescProps {
  description: Description;
}

function DescriptionItem(props: { description: string }) {
  return <Box color="#000">{props.description}</Box>;
}

export default DescriptionItem;
