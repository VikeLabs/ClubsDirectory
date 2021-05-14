import { ComponentType } from 'react';
import { AiOutlineSlack, AiOutlineMail } from 'react-icons/ai';
import { IoIosPeople, IoIosCalendar } from 'react-icons/io';
import { SiZoom } from 'react-icons/si';

import logo from '../Assets/Images/slack.jpg';
import { Photo } from '../Photo';

export interface Icon {
  icon: ComponentType;
}

export interface Link {
  url: string;
  logo: Icon;
}

export const defaultIcon: Icon = { icon: IoIosPeople };
export const defaultCalIcon: Icon = { icon: IoIosCalendar };
export const defaultSlackIcon: Icon = { icon: AiOutlineSlack };
export const defaultEmailIcon: Icon = { icon: AiOutlineMail };
export const defaultZoomIcon: Icon = { icon: SiZoom };

export const defaultLinks: Link[] = [
  {
    url: 'uvicpec@uvic.ca',
    logo: defaultEmailIcon,
  },
  {
    url: 'join.slack.com/',
    logo: defaultSlackIcon,
  },
  {
    url: 'uvic.zoom.us/club',
    logo: defaultZoomIcon,
  },
];

export async function getLinks() {
  return Promise.resolve(defaultLinks);
}

export interface Description {
  text: string;
}

export const defaultDescription: Description = {
  text: 'Club description goes here. Blah blah blah...',
};

export interface Path {
  text: string;
}

export const defaultPath: Path = {
  text: 'Club Categories / Arts / UVic Photography Excursion Club',
};

export interface Title {
  text: string;
}

export const defaultTitle: Title = {
  text: 'UVic Photography Excursion Club',
};

export const defaultPhotos: Photo[] = [
  {
    source: logo,
    alt: 'slack1',
  },
  {
    source: logo,
    alt: 'slack2',
  },
  {
    source: logo,
    alt: 'slack3',
  },
];

export interface Info {
  icon: Icon;
  text: string;
}

export const defaultInfos: Info[] = [
  {
    icon: defaultIcon,
    text: '74 members',
  },
  {
    icon: defaultCalIcon,
    text: 'Created January 2019',
  },
];

export interface Logo {
  source: string;
  alt: string;
}

export const defaultLogo: Logo = {
  source: logo,
  alt: 'logo',
};

export interface Tag {
  text: string;
  url: string;
}

export const defaultTags: Tag[] = [
  {
    text: 'Arts',
    url: './arts',
  },
  {
    text: 'Photography',
    url: './photography',
  },
  {
    text: 'Off Campus',
    url: './offcampus',
  },
];
