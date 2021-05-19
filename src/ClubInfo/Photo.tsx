import React from 'react';
import './photo.css';

export interface Photo {
  source: string;
  alt: string;
}

function PhotoItem(props: Photo) {
  return (
    <div className="photo-item">
      <img src={props.source} alt={props.alt}></img>
    </div>
  );
}

interface PhotoBarProps {
  photos: Photo[];
}

function PhotoBar(props: PhotoBarProps) {
  return (
    <div className="photo-bar">
      {props.photos.map((photo) => {
        return <PhotoItem source={photo.source} alt={photo.alt} />;
      })}
    </div>
  );
}

export default PhotoBar;
