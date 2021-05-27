import React from 'react';

import { Title } from './ClubInfoData';

import './ClubInfoStyles.css';

interface TitleProps {
  title: Title;
}

function TitleItem(props: { title: string }) {
  return (
    <div className="title-item">
      <h1>{props.title}</h1>
    </div>
  );
}

export default TitleItem;
