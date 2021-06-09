import { Button, ButtonGroup } from '@chakra-ui/react';
import React, { useState } from 'react';

import { GridDiv, RightSubGridDiv, PhotoHeaderDiv } from './ClubInfoPageStyledComponents';
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
} from './data';
import Description from './Description';
import Icon from './Icon';
import InfoList from './Infos';
import LinkList from './Links';
import LogoItem from './Logo';
import PathItem from './Path';
import PhotoBar from './Photo';
import TagList from './Tags';
import Title from './Title';

function RightSubGrid() {
  const infos = defaultInfos;
  const title = defaultTitle;
  const tags = defaultTags;
  const path = defaultPath;
  return (
    <RightSubGridDiv>
      <PathItem path={path}></PathItem>
      <Title title={title} />
      <TagList tags={tags} />
      <InfoList infos={infos} />
    </RightSubGridDiv>
  );
}

function ClubInfoPage() {
  const links = defaultLinks;
  const description = defaultDescription;
  const photos = defaultPhotos;
  const club_logo = defaultLogo;

  // header
  // logo path
  //      name
  //      tags
  // links infos
  //      desc
  // photos

  return (
    <div className="App">
      <GridDiv>
        <LogoItem logo={club_logo}></LogoItem>
        <RightSubGrid></RightSubGrid>
        <LinkList links={links}></LinkList>
        <Description description={description} />
        <PhotoHeaderDiv>Featured Photos</PhotoHeaderDiv>
        <PhotoBar photos={photos}></PhotoBar>
      </GridDiv>
    </div>
  );
}

export default ClubInfoPage;
