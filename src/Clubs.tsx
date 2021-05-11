import { ComponentType } from 'react';

import { Club } from './data';
import styled from 'styled-components';
import { Tag } from '@chakra-ui/react';
import PhotoItem from './Photo'


const ClubIconDiv = styled.div`
 background-color: white;
 margin: 50px 800px 50px 40px;
`

const StyledTag = styled(Tag)`
  margin: 5px 10px;
  padding-left: 15px; 
`



interface ClubProp {
  club: Club;
}

function ClubIcon(props: ClubProp) {
  // img tag will not load url as it 'cannot find module'. tried using require()

  return (
    <ClubIconDiv>
      <PhotoItem source={props.club.clubImage.source} alt={props.club.clubImage.alt}></PhotoItem> 
      <h1>{props.club.clubName}</h1>
      <p>{props.club.clubDescription}</p>
      <ul>
        {props.club.clubTags.map((tag, index) => {
          return <StyledTag borderRadius="full" key={index}>{tag}</StyledTag>;
        })}
      </ul>
    </ClubIconDiv>
  );
}


interface ClubsProp {
  clubs: Club[];
}

function Clubs(props: ClubsProp) {
  return (
    <ul>
      {props.clubs.map((club, index) => {
        return <ClubIcon club={club} key={index}/>;
      })}
    </ul>
  );
}

export default Clubs;
