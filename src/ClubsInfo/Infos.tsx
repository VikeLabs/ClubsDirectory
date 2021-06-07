import React from 'react';
import { IconType } from 'react-icons';
import { IoIosPeople, IoIosCalendar } from 'react-icons/io';

import './ClubInfoStyles.css';
import Icon from './Icon';

interface Info {
  data: string;
  icon: IconType;
}

function InfoItem(props: { info: Info }) {
  return (
    <div className="info-item">
      <p>
        <Icon icon={props.info.icon} />
        {props.info.data}
      </p>
    </div>
  );
}

function InfoList(props: { infos: string[] }) {
  const memberAndDate: Info[] = [
    {
      // Members Info and Icon.
      data: props.infos[0],
      icon: IoIosPeople,
    },
    {
      // Date Info and Icon.
      data: props.infos[1],
      icon: IoIosCalendar,
    },
  ];
  return (
    <p className="info-list">
      {memberAndDate.map((info) => {
        return <InfoItem info={info} />;
      })}
    </p>
  );
}

export default InfoList;
