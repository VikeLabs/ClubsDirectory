import React from 'react';

export interface Photo {
  source: string;
  alt: string;
}

function PhotoItem(props: Photo) {
  return (
    <div className="link-item">
      <img src={props.source} alt={props.alt}></img>
    </div>
  );
}

export default PhotoItem;