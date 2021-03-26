import React from 'react';

import { Club } from './../data';

interface ClubProp {
  club: Club;
}

function ClubIcon(props: ClubProp) {
  return (
    <div className="ClubIcon">
      <br></br>
      <img src={props.club.clubImage.url} alt={props.club.clubImage.alt}></img>
      <h3>{props.club.clubName}</h3>
      <p>{props.club.clubDescription}</p>
      <ul>
        {props.club.clubTags.map((tag) => {
          return <li>{tag}</li>;
        })}
      </ul>
    </div>
  );
}

interface ClubsProp {
  clubs: Club[];
}

function Clubs(props: ClubsProp) {
  return (
    <ul>
      {props.clubs.map((club) => {
        return <ClubIcon club={club} />;
      })}
    </ul>
  );
}

export default Clubs;
