import { Button, ButtonGroup } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Vike_Labs_Icon from '../Assets/Images/Vike_Labs_Icon.png';
import { ClubInfoData } from '../CustomProps';
import data from '../JSON/ClubData.json';

import { GridDiv, RightSubGridDiv, PhotoHeaderDiv } from './ClubInfoPageStyledComponents';
import {
  defaultLinks,
  defaultDescription,
  defaultTitle,
  defaultPhotos,
  defaultInfos,
  // defaultLogo,
  defaultTags,
  defaultIcon,
  defaultPath,
} from './data';
import Description from './Description';
import Icon from './Icon';
import InfoList from './Infos';
import LinkList from './Links';
import LogoItem, { Logo } from './Logo';
import PathItem from './Path';
import PhotoBar from './Photo';
import TagList from './Tags';
import Title from './Title';

interface subGridProps {
  membersAndDates: string[];
  title: string;
  tags: string[];
  clubType: string;
  clubName: string;
}

function RightSubGrid(props: { subProps: subGridProps }) {
  const infos = props.subProps.membersAndDates;
  const title = props.subProps.title;
  const tags = props.subProps.tags;

  // const infos = defaultInfos;
  // const title = defaultTitle;
  // const tags = defaultTags;
  // const path = defaultPath;
  return (
    <RightSubGridDiv>
      <PathItem category={props.subProps.clubType} clubName={props.subProps.clubName}></PathItem>
      <Title title={title} />
      <TagList tags={tags} />
      <InfoList infos={infos} />
    </RightSubGridDiv>
  );
}

function ClubInfoPage() {
  // Parsing and extracting the data from the JSON.
  const { clubType, clubName } = useParams<{ clubType: string; clubName: string }>();
  const clubInfo = findClubInfo(clubName);
  // Extracting the year and month the club was created.
  clubInfo[0].clubMembersAndCreationDate[1] = extractDate(clubInfo[0].clubMembersAndCreationDate[1]); // Commented this out until we have the acturate information.
  const membersAndDates = clubInfo[0].clubMembersAndCreationDate;
  const title = clubInfo[0].clubName;
  const tags = clubInfo[0].clubTags;
  const description = clubInfo[0].clubDescription;
  const club_logo = clubInfo[0].clubImage;
  // const links = clubInfo[0].clubLinks;
  const links = ['Temp', 'Temp'];

  const subGridProps = { membersAndDates, title, tags, clubType, clubName };

  // const links = defaultLinks;
  // const description = defaultDescription;
  const photos = defaultPhotos;
  // const club_logo = defaultLogo;

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
        <LogoItem source={club_logo} alt={clubName}></LogoItem>
        <RightSubGrid subProps={subGridProps}></RightSubGrid>
        <Description description={description} />
        <LinkList links={links}></LinkList>
        <PhotoHeaderDiv>Featured Photos</PhotoHeaderDiv>
        <PhotoBar photos={photos}></PhotoBar>
      </GridDiv>
    </div>
  );
}

function findClubInfo(clubName: string) {
  let completedData: ClubInfoData[] = data
    .filter((clubType) => clubType.name === clubName)
    .map(({ name, description, tags, socialMedia, primaryEmail, members, createdDate }) => ({
      clubName: name,
      clubDescription: description,
      clubTags: tags,
      clubImage: Vike_Labs_Icon,
      clubEmail: primaryEmail,
      clubSocialMedia: socialMedia,
      clubMembersAndCreationDate: [members + ' members', createdDate],
    }));
  return completedData;
}

function extractDate(rawDate: string) {
  let extractedDate = RegExp(/[0-9]*\-[0-9]*\-[0-9]*/).exec(rawDate);
  let processedDate = 'Date could not be extracted';
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  if (extractedDate != null) {
    let splitDateArray = extractedDate[0].split('-');
    let monthIndex = Number(splitDateArray[1]);
    let extractedMonth = months[monthIndex - 1];
    let extractedYear = splitDateArray[0];
    processedDate = extractedMonth + ' ' + extractedYear;
  }
  return processedDate;
}

export default ClubInfoPage;
