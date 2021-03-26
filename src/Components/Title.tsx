import React from 'react';

import { Title } from './../data';

interface TitleProps {
  title: Title;
}

function TitleItem(props: TitleProps) {
  return (
    <div className="title">
      <h1>{props.title.categoryName}</h1>
      <h3>{props.title.directoryName}</h3>
    </div>
  );
}

export default TitleItem;
