import React from 'react';

import { Info } from './data';

interface InfoProps {
  info: Info;
}

function InfoItem(props: InfoProps) {
  return (
    <div className="info-item">
      <img src={props.info.image.source} alt={props.info.image.alt}></img>
      <p>{props.info.text}</p>
    </div>
  );
}

interface InfoListProps {
  infos: Info[];
}

function InfoList(props: InfoListProps) {
  return (
    <ul className="info-list">
      {props.infos.map((info) => {
        return <InfoItem info={info} />;
      })}
    </ul>
  );
}

export default InfoList;
