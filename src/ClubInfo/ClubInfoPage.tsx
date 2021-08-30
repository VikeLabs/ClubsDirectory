import React from 'react';
import { useParams } from 'react-router-dom';

import { extractDate, findFullClubInfo } from '../Assets/DataParsing/Parsing';

import { GridDiv, RightSubGridDiv, PhotoHeaderDiv } from './ClubInfoPageStyledComponents';
import { defaultPhotos /* defaultLogo,*/ } from './data';
import Description from './Description';
import InfoList from './Infos';
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

function RightSubGrid(props: subGridProps) {
  const infos = props.membersAndDates;
  const title = props.title;
  const tags = props.tags;

  return (
    <RightSubGridDiv>
      <PathItem category={props.clubType} clubName={props.clubName}></PathItem>
      <Title title={title} />
      <TagList tags={tags} />
      <InfoList infos={infos} />
    </RightSubGridDiv>
  );
}

function ClubInfoPage() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const clubInfo = findFullClubInfo(slug);
  if (!clubInfo) {
    return <div>Not Found!</div>;
  }

  // Extracting the year and month the club was created.
  clubInfo.clubMembersAndCreationDate[1] = extractDate(clubInfo.clubMembersAndCreationDate[1]); // Commented this out until we have the acturate information.
  const membersAndDates = clubInfo.clubMembersAndCreationDate;
  const title = clubInfo.clubName;
  const tags = clubInfo.clubTags;
  const description = clubInfo.clubDescription;
  const club_logo = clubInfo.clubImage;
  const links = ['Temp', 'Temp'];

  const { clubName } = clubInfo;

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
        <RightSubGrid
          clubName={clubName}
          clubType={category}
          membersAndDates={membersAndDates}
          title={title}
          tags={tags}
        />
        <Description description={description} />
        <LinkList links={links}></LinkList>
        <PhotoHeaderDiv>Featured Photos</PhotoHeaderDiv>
        <PhotoBar photos={photos}></PhotoBar>
      </GridDiv>
    </div>
  );
}

export default ClubInfoPage;
