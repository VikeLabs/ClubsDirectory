import React from 'react';
import styled from 'styled-components';
import { border, color, BorderProps, ColorProps } from 'styled-system';

import { Path } from './data';

interface Props extends ColorProps, BorderProps {
  children: React.ReactNode;
}

const Box = styled.div<Props>`
  ${color};
  ${border};
`;

interface PathProps {
  path: Path;
}

function PathItem(props: PathProps) {
  return <p>{props.path.text}</p>;
}

export default PathItem;
