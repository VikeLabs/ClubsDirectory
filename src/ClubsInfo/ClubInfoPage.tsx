import { Button, ButtonGroup } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import './ClubInfoStyles.css';
import { ClubData } from '../ClubsList/ClubListData';
import data from '../JSON/MockData.json';

import {
  defaultLinks,
  defaultDescription,
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
import Title from './Title';

function findClubInfo(clubName: string) {
  let completedData: ClubData[] = data
    .filter((clubType) => clubType.name === clubName)
    .map(({ name, description, tags }) => ({ clubName: name, clubDescription: description, clubTags: tags }));
  return completedData;
}

function ClubInfoPage() {
  const links = defaultLinks;
  const photos = defaultPhotos;
  const infos = defaultInfos;
  const club_logo = defaultLogo;
  const deficon = defaultIcon;
  // Parsing and extracting the data from the JSON.
  const { clubType, clubName } = useParams<{ clubType: string; clubName: string }>();
  const path = `Club Categories/${clubType}/${clubName}`;
  const clubInfo = findClubInfo(clubName);
  const title = clubInfo[0].clubName;
  const tags = clubInfo[0].clubTags;
  const description = clubInfo[0].clubDescription;

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
          <DescriptionItem text={description} />
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
