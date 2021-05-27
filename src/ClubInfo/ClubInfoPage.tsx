import { Button, ButtonGroup } from '@chakra-ui/react';
import React, { useState } from 'react';
import styled from 'styled-components';
import { gridArea } from 'styled-system';

import { Grid, Row } from '../theme';

import './ClubInfoPage.css';

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

const GridDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template: 30px 0.5fr 0.5fr 1fr 0.5fr 0.5fr 2.5fr 0.5fr 3.5fr / 1fr 4fr;
  gap: 5px 20px;
  grid-template-areas:
    'header header'
    'back gap'
    'logo path'
    'logo clubName'
    'logo tags'
    'logo infos'
    'links description'
    'photoHeader empty'
    'photos photos';
`;

interface GridItemProps {
  gridArea: string;
  margin: string;
}

const Item = styled.div<GridItemProps>`
  grid-area: ${(props) => props.gridArea};
  text-align: left;
`;

const LeftItem = styled(Item)`
  margin: ${(props) => props.margin};
`;

LeftItem.defaultProps = {
  margin: '10px 0 0 15%',
};

const RightItem = styled(Item)`
  margin: 10px 0 10px 10px;
`;

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
      <GridDiv>
        <div className="back">back</div>
        <LeftItem gridArea="logo">
          <LogoItem logo={club_logo}></LogoItem>
        </LeftItem>
        <RightItem gridArea="path">
          <PathItem path={defaultPath}></PathItem>
        </RightItem>
        <RightItem gridArea="clubName">
          <Title title={title} />
        </RightItem>
        <RightItem gridArea="tags">
          <TagList tags={tags} />
        </RightItem>
        <LeftItem gridArea="links">
          <LinkList links={links}></LinkList>
        </LeftItem>
        <RightItem gridArea="infos">
          <InfoList infos={infos} />
        </RightItem>
        <RightItem gridArea="description">
          <Description description={description} />
        </RightItem>
        <LeftItem gridArea="photoHeader">Featured Photos</LeftItem>
        <LeftItem gridArea="photos">
          <PhotoBar photos={defaultPhotos}></PhotoBar>
        </LeftItem>
      </GridDiv>
    </div>
  );
}

export default ClubInfoPage;
