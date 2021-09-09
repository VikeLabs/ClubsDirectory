/*
Contains code and styling to display the category title and 
the directory path at the top of the club list page. 
*/

import styled from '@emotion/styled';

import { categoryDevice, device } from '../Assets/CSS/DeviceBreakPoints';
import { CATEGORIES } from '../categories';

import CategoryMenu from './CategoryMenu';

// Title Container uses CSS grid to display the title and directory path.
const TitleContainer = styled.div`
  @media ${device.mobile} {
    padding-top: 5%;
  }
  @media ${categoryDevice.tablet} {
    grid-template-columns: repeat(1, auto);
    padding-top: 1.5%;
  }
  color: white;
  font-family: Helvetica;
  display: grid;
  grid-template-columns: repeat(2, auto);
  text-overflow: clip;
  align-items: center;
  padding-top: 3%;
  padding-bottom: 10px;
`;

const TitleTag = styled.h1`
  @media ${device.mobile} {
    font-size: 40px;
    color: black;
  }
  @media ${categoryDevice.tablet} {
    font-size: 60px;
  }
  font-size: 45px;
  font-weight: 600;
  padding-left: 30px;
`;

const ListingHeader = styled.div`
  display: flex;
  align-items: center;
`;

const TitleDirTag = styled.h3`
  @media ${device.laptop} {
    display: none;
  }
  justify-self: end;
  margin-right: 3%;
  font-size: 17px;
`;

function TitleItem(props: { categoryName: string; directoryName: string }) {
  return (
    <TitleContainer>
      <ListingHeader>
        <CategoryMenu categoryList={CATEGORIES} />
        <TitleTag>{props.categoryName}</TitleTag>
      </ListingHeader>
      <TitleDirTag>{props.directoryName}</TitleDirTag>
    </TitleContainer>
  );
}

export default TitleItem;
