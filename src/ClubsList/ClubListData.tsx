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
}

export const defaultIcon: Icon = { icon: IoIosPeople };

export const defaultCategoryMenu: CategoryItem[] = [
  {
    categoryIcon: defaultIcon,
    categoryName: 'Home',
    categoryShortName: 'Home',
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'Arts',
    categoryShortName: 'Arts',
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'Community Service',
    categoryShortName: 'Community',
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'Cultural',
    categoryShortName: 'Culture',
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'Environmental',
    categoryShortName: 'Environment',
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'Food & Drink',
    categoryShortName: 'Food',
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'Gaming',
    categoryShortName: 'Gaming',
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'Music',
    categoryShortName: 'Music',
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'Politics',
    categoryShortName: 'Politics',
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'Religion',
    categoryShortName: 'Religion',
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'Sports & Rec',
    categoryShortName: 'Sports',
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'STEM',
    categoryShortName: 'STEM',
  },
  {
    categoryIcon: defaultIcon,
    categoryName: 'Other',
    categoryShortName: 'Other',
  },
];

const defaultPhoto: Photo = {
  source: error_img,
  alt: 'club logo',
};
