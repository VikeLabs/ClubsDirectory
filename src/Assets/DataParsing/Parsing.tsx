import { defaultCategory } from '../../ClubsCategories/CategoryData';
import rawData from '../../JSON/ClubData.json';
import Vike_Labs_Icon from '../Images/Vike_Labs_Icon.png';

import { ClubInfoData, ClubListData } from './DataProps';

function findFullClubInfo(clubName: string) {
  let completedData: ClubInfoData[] = rawData
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

function findShortClubInfo(clubCategory: string) {
  let completedData: ClubListData[] = rawData
    .filter((clubType) => clubType.category === clubCategory)
    .map(({ name, description, tags }) => ({
      clubName: name,
      clubCategory: clubCategory,
      clubDescription: description,
      clubTags: tags,
      clubImage: Vike_Labs_Icon,
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

// getFulltitle takes the club category path ID and searches for the full title of the category from the category data file.
function getFullTitle(pathClubID: string) {
  // Variable for storing the full title when found else, empty string.
  let tempTitle: string = '';

  defaultCategory.filter((item) => item.ShortTitle === pathClubID).map((item, index) => (tempTitle = item.FullTitle));

  return tempTitle;
}

export { findFullClubInfo, findShortClubInfo, extractDate, getFullTitle };
