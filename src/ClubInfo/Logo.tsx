import React from 'react';
import styled from 'styled-components';

const LogoDiv = styled.div`
  width: 100%;
  height: auto;
  margin: 0px 0;
  border-radius: 2px;
  text-align: left;
  margin-left: 0px;
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
