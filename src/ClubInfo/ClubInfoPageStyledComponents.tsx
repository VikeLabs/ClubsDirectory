import React, { useState } from 'react';
import styled from 'styled-components';

export const GridDiv = styled.div`
  @media screen and (max-width: 768px) {
    grid-template: 1fr 3fr 1fr 1fr 5fr / 1fr;
    grid-template-areas:
      'logo'
      'rightSubGrid'
      'description'
      'links'
      'photoHeader'
      'photos';
    padding: 0 10% 0 10%;
    height: 200vh;
  }
  background-color: white;
  /* height: 100vh; This height parameter is preventing the grid from pushing the footer down as content grows.*/
  height: max-content;
  width: 100%;
  padding-top: 30px;
  display: grid;
  grid-template: 2.5fr 2.5fr 0.5fr 3.5fr / 1fr 4fr;
  gap: 5px 20px;
  grid-template-areas:
    'logo rightSubGrid'
    'links description'
    'photoHeader empty'
    'photos photos';
`;

export const RightSubGridDiv = styled.div`
  @media screen and (max-width: 768px) {
    margin: 20px 0 0 0;
  }
  grid-area: 'rightSubGrid';
  display: grid;
  grid-template: 0.5fr 1fr 0.5fr 0.5fr;
  grid-template-areas:
    'path'
    'clubName'
    'tags'
    'infos';
`;

export const PhotoHeaderDiv = styled.p`
  @media screen and (max-width: 768px) {
    display: none;
  }
  grid-area: photoHeader;
  text-align: left;
  margin-left: 15%;
  font-weight: bold;
`;
