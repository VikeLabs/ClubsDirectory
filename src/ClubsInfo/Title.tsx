import React from 'react';

import { Title } from './ClubInfoData';

import './ClubInfoStyles.css';

interface TitleProps {
  title: Title;
}

function TitleItem(props: TitleProps) {
  return (
    <div className="title-item">
      <h1>{props.title.text}</h1>
    </div>
  );
}

export default TitleItem;