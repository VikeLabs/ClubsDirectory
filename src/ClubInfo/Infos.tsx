import React from 'react';
import { IconType } from 'react-icons';
import { IoIosPeople, IoIosCalendar } from 'react-icons/io';
import styled from 'styled-components';

import Icon from './Icon';

interface Info {
  data: string;
  icon: IconType;
}

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
        <Icon icon={props.info.icon} /> {props.info.data}
      </p>
    </div>
  );
}

interface InfoListProps {
  infos: string[];
}

function InfoList(props: InfoListProps) {
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
    <InfoListDiv>
      {memberAndDate.map((info) => {
        return <InfoItem info={info} />;
      })}
    </InfoListDiv>
  );
}

export default InfoList;
