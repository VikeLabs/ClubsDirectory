import React from 'react';
import styled from 'styled-components';
import './photo.css';

const PhotoListDiv = styled.div`
  grid-area: photos;
  text-align: left;
  margin: 0 15% 10px 15%;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: left;
  gap: 30px;
`;

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
    <PhotoListDiv>
      {props.photos.map((photo) => {
        return <PhotoItem source={photo.source} alt={photo.alt} />;
      })}
    </PhotoListDiv>
  );
}

export default PhotoBar;
