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

interface PhotoBarProps {
  photos: Photo[];
}

function PhotoBar(props: PhotoBarProps) {
  return (
    <ul className="photo-bar">
      {props.photos.map((photo) => {
        return <PhotoItem source={photo.source} alt={photo.alt} />;
      })}
    </ul>
  );
}

export default PhotoBar;
