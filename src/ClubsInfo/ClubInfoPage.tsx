import { Button, ButtonGroup } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

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
} from './ClubInfoData';
import DescriptionItem from './Description';
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
  const photos = defaultPhotos;
  const infos = defaultInfos;
  const club_logo = defaultLogo;
  const tags = defaultTags;
  const deficon = defaultIcon;
  const { clubType, clubName } = useParams<{ clubType: string; clubName: string }>();
  const path = `Club Categories/${clubType}/${clubName}`;
  const title = clubName;

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
          <PathItem pathURL={path} />
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
          <DescriptionItem description={description} />
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
