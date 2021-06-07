import React from 'react';
import styled from 'styled-components';

import './ClubInfoStyles.css';

const LogoDiv = styled.div`
  max-width: 100%;
  max-height: 100%;
  margin: 0px 0;
  border-radius: 2px;
  text-align: left;
  margin-left: 0px;
`;

function LogoBar(logoProps: { source: string; alt: string }) {
  return (
    <ul className="logo-bar">
      <div className="logo-item">
        <img src={logoProps.source} alt={logoProps.alt} />
      </div>
    </ul>
  );
}

export default LogoBar;
