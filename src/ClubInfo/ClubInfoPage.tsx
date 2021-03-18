import React, { useState } from 'react';

import { defaultLinks, defaultDescription, defaultTitle, defaultPhotos } from './data';
import Description from './Description';
import LinkList from './Links';
import PhotoBar from './Photo';
import Title from './Title';

function ClubInfoPage() {
  const links = defaultLinks;
  const description = defaultDescription;
  const title = defaultTitle;
  const photos = defaultPhotos;

  return (
    <div className="club-info-page">
      <Title title={title} />
      <LinkList links={links} />
      <h2>Description</h2>
      <Description description={description} />
      <h2>Featured Photos</h2>
      <PhotoBar photos={photos} />
    </div>
  );
}

export default ClubInfoPage;
