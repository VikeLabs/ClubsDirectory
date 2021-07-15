import React from 'react';
import styled from 'styled-components';

import './photo.css';

const LogoDiv = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  text-align: left;
  grid-area: 'logo';
  margin-left: 15%;
  overflow: visible;
`;

export interface Logo {
  source: string;
  alt: string;
}
export interface LogoProps {
  logo: Logo;
}

function LogoItem(props: { source: string; alt: string }) {
  return (
    <LogoDiv className="photo-item">
      <img src={props.source} alt={props.alt}></img>
    </LogoDiv>
  );
}

function LogoBar(logoProps: { source: string; alt: string }) {
  return (
    <ul className="logo-bar">
      <div className="logo-item">
        <img src={logoProps.source} alt={logoProps.alt} />
      </div>
    </ul>
  );
}

export default LogoItem;
