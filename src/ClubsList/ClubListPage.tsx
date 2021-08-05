import { useParams } from 'react-router-dom';

import { getFullTitle } from '../Assets/DataParsing/Parsing';

import { ClubPageDiv } from './ClubListStyles';
import Clubs from './Clubs';
import TitleItem from './Title';

function ClubListPage() {
  const { clubList } = useParams<{ clubList: string }>();
  const fullTitle = getFullTitle(clubList);
  const directory = `Club Categories/${fullTitle} Clubs`;

  return (
    <ClubPageDiv>
      <TitleItem categoryName={fullTitle} directoryName={directory} />
      <Clubs category={fullTitle} />
    </ClubPageDiv>
  );
}

export default ClubListPage;
