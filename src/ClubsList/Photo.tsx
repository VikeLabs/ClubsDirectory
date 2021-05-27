import React from 'react';

export interface Photo {
  source: string;
  alt: string;
}

function PhotoItem(props: Photo) {
  return <img src={props.source} alt={props.alt}></img>;
}

export default PhotoItem;
