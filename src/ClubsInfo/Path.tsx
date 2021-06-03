import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { border, color, BorderProps, ColorProps } from 'styled-system';

interface Props extends ColorProps, BorderProps {
  children: React.ReactNode;
}

const Box = styled.div<Props>`
  ${color};
  ${border};
`;

function PathItem(props: { category: string; clubName: string }) {
  return (
    <div>
      <Link to="/ClubCategories">Club Categories/</Link>
      <Link to={`/ClubCategories/ClubList/${props.category} Club`}>{props.category}/</Link>
      {props.clubName}
    </div>
  );
}

export default PathItem;
