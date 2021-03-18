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
