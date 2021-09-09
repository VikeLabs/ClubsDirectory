import Vike_Labs_Icon from '../Assets/Images/Vike_Labs_Icon.png';
import { CATEGORIES } from '../categories';
import { ClubData } from '../JSON/ClubData';
import rawData from '../JSON/ClubData.json';

const clubs = rawData as ClubData[];

// findFullClubInfo is a function that takes a club name as input.
// Then finds and extracts all the information about the passed club name
// from the ClubData.json and returns an array of objects(See DataProps.tsx for the object).
function findFullClubInfo(clubName: string) {
  const data = clubs.find(({ name }) => name === clubName);

  if (!data) return null;

  return {
    clubName: data.name,
    clubDescription: data.description,
    clubTags: data.tags,
    clubImage: Vike_Labs_Icon,
    clubEmail: data.primaryEmail,
    clubSocialMedia: data.socialMedia,
    clubMembersAndCreationDate: [data.members + ' members', data.createdDate],
  };
}

// findShortClubInfo is a function that takes a category name as input.
// Then finds all the clubs in the category and extracts a subset of information about each club
// from the ClubData.json. Returning an array of objects(See DataProps.tsx for the object).
function findShortClubInfo(clubCategory: string) {
  return clubs
    .filter((clubType) => clubType.category === clubCategory)
    .map(({ name, description, tags }) => ({
      clubName: name,
      clubCategory: clubCategory,
      clubDescription: description,
      clubTags: tags,
      clubImage: Vike_Labs_Icon,
    }));
}

// extractDate is a function that takes a string in the form of YYYY-MM-DD Hr:Minute:Second
// Then extracts the month and year, then converts the month from a number to the month
// name. Returns a string in the form Month Year.
function extractDate(rawDate: string) {
  let extractedDate = RegExp(/[0-9]*\-[0-9]*\-[0-9]*/).exec(rawDate); // Extracting the 1984-11-06 part from input string.
  let processedDate = 'Date could not be extracted'; // Error message indicating the input string did not contain a YYYY-MM-DD substring.
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

  // Checking if the input string did contain the substring YYYY-MM-DD.
  if (extractedDate != null) {
    let splitDateArray = extractedDate[0].split('-'); // Spliting the extracted string on the '-' creating an array of the form: YYYY MM DD
    let monthIndex = Number(splitDateArray[1]); // Converting the MM value from a string to Number.
    let extractedMonth = months[monthIndex - 1]; // Using the converted MM value to find the month.
    let extractedYear = splitDateArray[0];
    processedDate = extractedMonth + ' ' + extractedYear;
  }
  return processedDate;
}

// getFulltitle takes the club category path ID.
// and searches for the full title of the category from the category data file.
function getFullTitle(pathClubID: string) {
  // Variable for storing the full title when found else, empty string.
  let tempTitle: string = '';

  CATEGORIES.filter((item) => item.shortTitle === pathClubID).map((item, index) => (tempTitle = item.fullTitle));

  return tempTitle;
}

export { findFullClubInfo, findShortClubInfo, extractDate, getFullTitle };
