import React from 'react';
import { useParams } from 'react-router-dom';

import pec_logo from '../Assets/Images/pec.jpg';
import './ClubInfoStyles.css';
import { ClubInfoData } from '../CustomProps';
import data from '../JSON/MockData.json';

import { defaultPhotos } from './ClubInfoData';
import DescriptionItem from './Description';
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
    let extractedMonth = months[monthIndex];
    let extractedYear = splitDateArray[0];
    processedDate = extractedMonth + ' ' + extractedYear;
  }
  return processedDate;
}

function ClubInfoPage() {
  // Parsing and extracting the data from the JSON.
  const { clubType, clubName } = useParams<{ clubType: string; clubName: string }>();
  const path = `Club Categories/${clubType}/${clubName}`;
  const clubInfo = findClubInfo(clubName);
  // Extracting the year and month the club was created.
  clubInfo[0].clubMembersAndCreationDate[1] = extractDate(clubInfo[0].clubMembersAndCreationDate[1]);
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
          <PathItem category={clubType} clubName={clubName} />
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
