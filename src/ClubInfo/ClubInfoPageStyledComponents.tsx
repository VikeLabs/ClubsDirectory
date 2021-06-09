import React, { useState } from 'react';
import styled from 'styled-components';

export const GridDiv = styled.div`
  background-color: white;
  height: 100vh;
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
  grid-area: photoHeader;
  text-align: left;
  margin-left: 15%;
  font-weight: bold;
`;
