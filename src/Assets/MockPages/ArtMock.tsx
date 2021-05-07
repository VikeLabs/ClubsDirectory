import React from 'react';
import styled from 'styled-components';

import { CategoryTitle } from '../../CategoryModule/MatrixStyledComponents';

const LandingPageBodyText = styled.p`
  font-size: 30px;
  font-weight: 600;
  width: 680px;
  height: 166px;
  margin-left: 55px;
  margin-top: -20px;
`;

function ArtMock() {
  return (
    <div>
      <CategoryTitle>Arts Page</CategoryTitle>
      <LandingPageBodyText>Testing this feature</LandingPageBodyText>
    </div>
  );
}

export default ArtMock;
