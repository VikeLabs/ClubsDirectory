import React from 'react';

import { Title } from './data';

interface TitleProps {
  title: Title;
}

function TitleItem(props: TitleProps) {
  return (
    <div className="link-item">
      <h1>{props.title.text}</h1>
    </div>
  );
}

export default TitleItem;
