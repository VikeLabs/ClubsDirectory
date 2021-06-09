import React from 'react';
import styled from 'styled-components';
import { border, color, BorderProps, ColorProps } from 'styled-system';

import { Path } from './data';

const PathDiv = styled.p`
  grid-area: path;
  text-align: left;
  margin-left: 10px;
`;

interface PathProps {
  path: Path;
}

function PathItem(props: PathProps) {
  return <PathDiv>{props.path.text}</PathDiv>;
}

export default PathItem;
