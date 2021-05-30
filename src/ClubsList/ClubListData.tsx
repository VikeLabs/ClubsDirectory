import { ComponentType } from 'react';
import { IoIosPeople } from 'react-icons/io';

import error_img from '../Assets/Images/error_image.png';
export interface Photo {
  source: string;
  alt: string;
}

export interface Icon {
  icon: ComponentType;
}

export interface CategoryItem {
  categoryIcon: Icon;
  categoryName: string;
  categoryShortName: string;
  clubs: string[];
}

export const defaultIcon: Icon = { icon: IoIosPeople };

export const defaultCategoryMenu: CategoryItem[] = [
  {
    categoryIcon: defaultIcon,
    categoryName: 'Arts',
    categoryShortName: 'Arts',
    clubs: ['Her Campus', 'Uvic Photography Club', 'Vikes Improv'],
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'Community Service',
    categoryShortName: 'Community',
    clubs: ['Community Service Club', 'Random Club', 'Random Club'],
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'Cultural',
    categoryShortName: 'Culture',
    clubs: ['Community Service Club', 'Random Club', 'Random Club'],
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'Environmental',
    categoryShortName: 'Environment',
    clubs: ['Community Service Club', 'Random Club', 'Random Club'],
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'Food & Drink',
    categoryShortName: 'Food',
    clubs: ['Community Service Club', 'Random Club', 'Random Club'],
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'Gaming',
    categoryShortName: 'Gaming',
    clubs: ['Community Service Club', 'Random Club', 'Random Club'],
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'Music',
    categoryShortName: 'Music',
    clubs: ['Community Service Club', 'Random Club', 'Random Club'],
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'Politics',
    categoryShortName: 'Politics',
    clubs: ['Community Service Club', 'Random Club', 'Random Club'],
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'Religion',
    categoryShortName: 'Religion',
    clubs: ['Community Service Club', 'Random Club', 'Random Club'],
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'Sports & Rec',
    categoryShortName: 'Sports',
    clubs: ['Community Service Club', 'Random Club', 'Random Club'],
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'STEM',
    categoryShortName: 'STEM',
    clubs: ['Community Service Club', 'Random Club', 'Random Club'],
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'Other',
    categoryShortName: 'Other',
    clubs: ['Community Service Club', 'Random Club', 'Random Club'],
  },
];

const defaultPhoto: Photo = {
  source: error_img,
  alt: 'club logo',
};
