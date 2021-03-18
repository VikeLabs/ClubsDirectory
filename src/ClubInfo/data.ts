import { Photo } from './Photo';

export interface Link {
  url: string;
  logo: Photo;
}

export const defaultLinks: Link[] = [
  {
    url: 'uvicpec@uvic.ca',
    logo: {
      source: './slack.jpg',
      alt: 'logo1',
    },
  },
  {
    url: 'join.slack.com/',
    logo: {
      source: './slack.jpg',
      alt: 'logo2',
    },
  },
  {
    url: 'uvic.zoom.us/club',
    logo: {
      source: './slack.jpg',
      alt: 'logo3',
    },
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

export interface Title {
  text: string;
}

export const defaultTitle: Title = {
  text: 'UVic Photography Excursion Club',
};

export const defaultPhotos: Photo[] = [
  {
    source: './slack.jpg',
    alt: 'slack1',
  },
  {
    source: './slack.jpg',
    alt: 'slack2',
  },
  {
    source: './slack.jpg',
    alt: 'slack3',
  },
];

export interface Info {
  image: Photo;
  text: string;
}

export const defaultInfos: Info[] = [
  {
    image: {
      source: './slack.jpg',
      alt: 'person_icon',
    },
    text: '74 members',
  },
  {
    image: {
      source: './slack.jpg',
      alt: 'calendar_icon',
    },
    text: 'Created January 2019',
  },
];

export const defaultLogo: Photo[] = [
  {
    source: './slack.jpg',
    alt: 'logo',
  },
];

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
