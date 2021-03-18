import React, { useState } from 'react';

import {
  defaultLinks,
  defaultDescription,
  defaultTitle,
  defaultPhotos,
  defaultInfos,
  defaultLogo,
  defaultTags,
} from './data';
import Description from './Description';
import InfoList from './Infos';
import LinkList from './Links';
import PhotoBar from './Photo';
import TagList from './Tags';
import Title from './Title';

function ClubInfoPage() {
  const links = defaultLinks;
  const description = defaultDescription;
  const title = defaultTitle;
  const photos = defaultPhotos;
  const infos = defaultInfos;
  const club_logo = defaultLogo;
  const tags = defaultTags;

  return (
    <div className="club-info-page">
      <Title title={title} />
      <PhotoBar photos={club_logo} />
      <h2>Tags</h2>
      <TagList tags={tags} />
      <h2>Info</h2>
      <InfoList infos={infos} />
      <h2>Links</h2>
      <LinkList links={links} />
      <h2>Description</h2>
      <Description description={description} />
      <h2>Featured Photos</h2>
      <PhotoBar photos={photos} />
    </div>
  );
}

export default ClubInfoPage;
