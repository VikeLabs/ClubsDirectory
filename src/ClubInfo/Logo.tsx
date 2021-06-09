import React from 'react';
import styled from 'styled-components';

const LogoDiv = styled.div`
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  text-align: left;
  grid-area: 'logo';
  margin-left: 15%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
    <LogoDiv>
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
