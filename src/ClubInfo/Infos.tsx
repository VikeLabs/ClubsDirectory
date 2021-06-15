import React from 'react';
import styled from 'styled-components';

import { Info } from './data';
import IconItem from './Icon';
import Icon from './Icon';

const InfoListDiv = styled.p`
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    gap: 10px;
  }
  grid-area: infos;
  display: flex;
  flex-direction: row;
  align-items: left;
  gap: 20px;
  text-align: left;
  margin: 0 0 10px 10px;
`;

interface InfoProps {
  info: Info;
}

function InfoItem(props: InfoProps) {
  return (
    <div>
      <p>
        <Icon icon={props.info.icon} /> {props.info.text}
      </p>
    </div>
  );
}

interface InfoListProps {
  infos: Info[];
}

function InfoList(props: InfoListProps) {
  return (
    <InfoListDiv>
      {props.infos.map((info) => {
        return <InfoItem info={info} />;
      })}
    </InfoListDiv>
  );
}

export default InfoList;
