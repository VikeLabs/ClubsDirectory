import React from 'react';

import './ClubInfoStyles.css';

import { Info } from './ClubInfoData';
import IconItem from './Icon';
import Icon from './Icon';

interface InfoProps {
  info: Info;
}

function InfoItem(props: { info: string }) {
  return (
    <div className="info-item">
      <p>
        {/* <Icon icon={props.info.icon} />  */}
        {props.info}
      </p>
    </div>
  );
}

interface InfoListProps {
  infos: Info[];
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
