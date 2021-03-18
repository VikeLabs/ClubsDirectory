import React from 'react';

import { Description } from './data';

interface DescProps {
  description: Description;
}

function DescriptionItem(props: DescProps) {
  return <p className="desc-item">{props.description.text}</p>;
}

export default DescriptionItem;
