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

function LogoItem(props: LogoProps) {
  return (
    <LogoDiv className="photo-item">
      <img src={props.logo.source} alt={props.logo.alt}></img>
    </LogoDiv>
  );
}

interface LogoBarProps {
  logos: Logo[];
}

function LogoBar(props: LogoBarProps) {
  return (
    <ul className="logo-bar">
      {props.logos.map((logo) => {
        return <LogoItem logo={logo} />;
      })}
    </ul>
  );
}

export default LogoItem;
