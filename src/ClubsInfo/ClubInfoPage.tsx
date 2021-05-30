import { Button, ButtonGroup } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import pec_logo from '../Assets/Images/pec.jpg';
import './ClubInfoStyles.css';
import { ClubInfoData } from '../CustomProps';
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
import LogoBar from './Logo';
import PathItem from './Path';
import PhotoBar from './PhotoBar';
import TagList from './Tags';
import Title from './Title';

function findClubInfo(clubName: string) {
  let completedData: ClubInfoData[] = data
    .filter((clubType) => clubType.name === clubName)
    .map(({ name, description, tags, primaryEmail, members, createdDate }) => ({
      clubName: name,
      clubDescription: description,
      clubTags: tags,
      clubImage: pec_logo,
      clubLinks: [primaryEmail, 'join.slack.com/', 'uvic.zoom.us/club'],
      clubMembersAndCreationDate: [members, createdDate],
    }));
  return completedData;
}

function ClubInfoPage() {
  const photos = defaultPhotos;
  const infos = defaultInfos;
  const deficon = defaultIcon;
  // Parsing and extracting the data from the JSON.
  const { clubType, clubName } = useParams<{ clubType: string; clubName: string }>();
  const path = `Club Categories/${clubType}/${clubName}`;
  const clubInfo = findClubInfo(clubName);
  const title = clubInfo[0].clubName;
  const tags = clubInfo[0].clubTags;
  const description = clubInfo[0].clubDescription;
  const club_logo = clubInfo[0].clubImage;
  const links = clubInfo[0].clubLinks;
  const membersAndDate = clubInfo[0].clubMembersAndCreationDate;

  return (
    <div className="App">
      <div className="grid">
        <div className="header" />
        <div className="logo">
          <LogoBar source={club_logo} alt={'club logo'} />
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
          <InfoList infos={membersAndDate} />
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
