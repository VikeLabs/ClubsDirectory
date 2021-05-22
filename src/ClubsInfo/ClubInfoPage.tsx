import { Button, ButtonGroup } from '@chakra-ui/react';
import React, { useState } from 'react';

import './ClubInfoStyles.css';

import {
  defaultLinks,
  defaultDescription,
  defaultTitle,
  defaultPhotos,
  defaultInfos,
  defaultLogo,
  defaultTags,
  defaultIcon,
  defaultPath,
} from './ClubInfoData';
import Description from './Description';
import Icon from './Icon';
import InfoList from './Infos';
import LinkList from './Links';
import LogoItem from './Logo';
import PathItem from './Path';
import PhotoBar from './PhotoBar';
import TagList from './Tags';
import { Grid, Row } from './theme';
import Title from './Title';

function ClubInfoPage() {
  const links = defaultLinks;
  const description = defaultDescription;
  const title = defaultTitle;
  const photos = defaultPhotos;
  const infos = defaultInfos;
  const club_logo = defaultLogo;
  const tags = defaultTags;
  const deficon = defaultIcon;
  const path = defaultPath;

  // header
  // logo path
  //      name
  //      tags
  // links infos
  //      desc
  // photos

  return (
    <div className="App">
      <div className="grid">
        <div className="header" />
        <div className="logo">
          <LogoItem logo={club_logo} />
        </div>
        <div className="path">
          <PathItem path={defaultPath} />
        </div>
        <div className="clubName">
          <Title title={title} />
        </div>
        <div className="tags">
          <TagList tags={tags} />
        </div>
        <div className="links">
          <LinkList links={links} />
        </div>
        <div className="infos">
          <InfoList infos={infos} />
        </div>
        <div className="description">
          <Description description={description} />
        </div>
        <div className="photoHeader">
          <p>Featured Photos</p>
        </div>
        <div className="photos">
          <PhotoBar photos={defaultPhotos} />
        </div>
      </div>
    </div>
  );
}

export default ClubInfoPage;
