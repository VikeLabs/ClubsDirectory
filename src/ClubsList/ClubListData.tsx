import { ComponentType } from 'react';
import { FaHandsHelping, FaPaintBrush, FaPrayingHands, FaMicroscope, FaHome } from 'react-icons/fa';
import { GiSoccerBall } from 'react-icons/gi';
import { GoLaw } from 'react-icons/go';
import { HiOutlineSparkles } from 'react-icons/hi';
import { IoIosPeople, IoIosMore } from 'react-icons/io';
import { IoEarthOutline } from 'react-icons/io5';
import { IconType } from 'react-icons/lib';

export interface Photo {
  source: string;
  alt: string;
}

export interface Icon {
  icon: ComponentType;
}

export interface CategoryItem {
  categoryIcon: IconType;
  categoryName: string;
  categoryShortName: string;
}

export const defaultIcon: Icon = { icon: IoIosPeople };

export const defaultCategoryMenu: CategoryItem[] = [
  {
    categoryIcon: FaHome,
    categoryName: 'Home',
    categoryShortName: 'Home',
  },
  {
    categoryIcon: FaPaintBrush,
    categoryName: 'Arts',
    categoryShortName: 'Arts',
  },
  {
    categoryIcon: FaHandsHelping,
    categoryName: 'Community Service',
    categoryShortName: 'Community',
  },
  {
    categoryIcon: IoIosPeople,
    categoryName: 'Cultural',
    categoryShortName: 'Culture',
  },
  {
    categoryIcon: IoEarthOutline,
    categoryName: 'Environmental',
    categoryShortName: 'Environment',
  },
  {
    categoryIcon: HiOutlineSparkles,
    categoryName: 'Interest',
    categoryShortName: 'Interest',
  },
  {
    categoryIcon: GoLaw,
    categoryName: 'Politics',
    categoryShortName: 'Politics',
  },
  {
    categoryIcon: FaPrayingHands,
    categoryName: 'Religion',
    categoryShortName: 'Religion',
  },
  {
    categoryIcon: GiSoccerBall,
    categoryName: 'Sports & Rec',
    categoryShortName: 'Sports',
  },
  {
    categoryIcon: FaMicroscope,
    categoryName: 'STEM',
    categoryShortName: 'STEM',
  },
  {
    categoryIcon: IoIosMore,
    categoryName: 'Other',
    categoryShortName: 'Other',
  },
];
