import error_img from '../Assets/Images/error_image.png';

import { Photo } from './Photo';

export interface Title {
  categoryName: string;
  directoryName: string;
}

export const defaultTitle: Title = {
  categoryName: 'Arts',
  directoryName: 'Club Categories/Art Clubs',
};

export interface CategoryItem {
  categoryName: string;
  clubs: string[];
}

export const defaultCategoryMenu: CategoryItem[] = [
  {
    categoryName: 'Arts',
    clubs: ['Her Campus', 'Uvic Photography Club', 'Vikes Improv'],
  },
  {
    categoryName: 'Community Service',
    clubs: ['Community Service Club', 'Random Club', 'Random Club'],
  },
  {
    categoryName: 'Cutural',
    clubs: ['Community Service Club', 'Random Club', 'Random Club'],
  },
  {
    categoryName: 'Environmental',
    clubs: ['Community Service Club', 'Random Club', 'Random Club'],
  },
  {
    categoryName: 'Food & Drink',
    clubs: ['Community Service Club', 'Random Club', 'Random Club'],
  },
  {
    categoryName: 'Technology',
    clubs: ['Community Service Club', 'Random Club', 'Random Club'],
  },
];

export interface Club {
  clubName: string;
  clubImage: Photo;
  clubDescription: string;
  clubTags: string[];
}

export interface ClubData {
  clubName: string;
  clubDescription: string;
  clubTags: string[];
}

const defaultPhoto: Photo = {
  source: error_img,
  alt: 'club logo',
};

export const defaultClubs: Club[] = [
  {
    clubName: 'Her Campus',
    clubImage: defaultPhoto,
    clubDescription:
      'This is the club description. This is the club description. This is the club description. This is the club description. This is the club description. This is the club description. This is the club description. This is the club description. This is the club description.',
    clubTags: ['Arts', 'Blog', 'Digital Media'],
  },
  {
    clubName: 'UVic Photography Excursion Club',
    clubImage: defaultPhoto,
    clubDescription:
      'This is the club description. This is the club description. This is the club description. This is the club description. This is the club description. This is the club description. This is the club description. This is the club description. This is the club description.',
    clubTags: ['Arts', 'Off Campus', 'Photography'],
  },
  {
    clubName: 'Vikes Improv',
    clubImage: defaultPhoto,
    clubDescription:
      'This is the club description. This is the club description. This is the club description. This is the club description. This is the club description. This is the club description. This is the club description. This is the club description. This is the club description.',
    clubTags: ['Acting', 'Arts', 'Theatre'],
  },
];
