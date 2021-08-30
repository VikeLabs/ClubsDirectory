import React from 'react';
import { useParams } from 'react-router-dom';

import { extractDate, findFullClubInfo } from '../Assets/DataParsing/Parsing';

import { GridDiv, RightSubGridDiv, PhotoHeaderDiv } from './ClubInfoPageStyledComponents';
import { defaultPhotos /* defaultLogo,*/ } from './data';
import Description from './Description';
import LinkList from './Links';
import LogoItem from './Logo';
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
    </RightSubGridDiv>
  );
}

function ClubInfoPage() {
  // Parsing and extracting the data from the JSON.
  const { clubType, clubName } = useParams<{ clubType: string; clubName: string }>();
  const clubInfo = findFullClubInfo(clubName);
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

export default ClubInfoPage;
