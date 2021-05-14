import React from 'react';

import './infos.css';

import { Info } from './data';
import IconItem from './Icon';
import Icon from './Icon';

interface InfoProps {
  info: Info;
}

function InfoItem(props: InfoProps) {
  return (
    <div className="info-item">
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
    <p className="info-list">
      {props.infos.map((info) => {
        return <InfoItem info={info} />;
      })}
    </p>
  );
}

export default InfoList;
