import React from 'react';
import styled from 'styled-components';
import { border, color, BorderProps, ColorProps } from 'styled-system';

import { Path } from './ClubInfoData';

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

function PathItem(props: { pathURL: string }) {
  return <p>{props.pathURL}</p>;
}

export default PathItem;
