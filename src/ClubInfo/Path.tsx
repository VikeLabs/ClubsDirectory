import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PathDiv = styled.p`
  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
  grid-area: path;
  text-align: left;
  margin-left: 10px;
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
