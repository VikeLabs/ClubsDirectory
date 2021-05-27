import React from 'react';
import styled from 'styled-components';
import { border, color, BorderProps, ColorProps } from 'styled-system';

import { Description } from './ClubInfoData';

interface Props extends ColorProps, BorderProps {
  children: React.ReactNode;
}

const Box = styled.div<Props>`
  ${color};
  ${border};
`;

function DescriptionItem(props: { text: string }) {
  return <Box color="#000">{props.text}</Box>;
}

export default DescriptionItem;
