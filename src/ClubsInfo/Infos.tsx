import React from 'react';
import { GoLaw } from 'react-icons/go';

import './ClubInfoStyles.css';
import Icon from './Icon';

function InfoItem(props: { info: string }) {
  const icon = GoLaw;
  return (
    <div className="info-item">
      <p>
        <Icon icon={icon} />
        {props.info}
      </p>
    </div>
  );
}

function InfoList(props: { infos: string[] }) {
  return (
    <p className="info-list">
      {props.infos.map((info) => {
        return <InfoItem info={info} />;
      })}
    </p>
  );
}

export default InfoList;
