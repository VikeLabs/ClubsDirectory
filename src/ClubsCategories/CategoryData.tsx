import { ComponentType } from 'react';
import { FaHandsHelping, FaPaintBrush, FaMusic, FaPrayingHands, FaMicroscope } from 'react-icons/fa';
import { GiSoccerBall } from 'react-icons/gi';
import { GoLaw } from 'react-icons/go';
import { HiOutlineSparkles } from 'react-icons/hi';
import { IoIosPeople, IoIosMore } from 'react-icons/io';
import { IoEarthOutline } from 'react-icons/io5';

export interface Category {
  ShortTitle: string;
  FullTitle: string;
  icon: ComponentType;
}

// Const for storing each category name(full and shorthand) and their icon.
export const defaultCategory: Category[] = [
  {
    ShortTitle: 'Arts',
    FullTitle: 'Arts',
    icon: FaPaintBrush,
  },
  {
    ShortTitle: 'Community',
    FullTitle: 'Community Service & Volunteer',
    icon: FaHandsHelping,
  },
  {
    ShortTitle: 'Culture',
    FullTitle: 'Cultural',
    icon: IoIosPeople,
  },
  {
    ShortTitle: 'Environment',
    FullTitle: 'Environmental',
    icon: IoEarthOutline,
  },
  {
    ShortTitle: 'Interest',
    FullTitle: 'Interest',
    icon: HiOutlineSparkles,
  },
  {
    ShortTitle: 'Politics',
    FullTitle: 'Political',
    icon: GoLaw,
  },
  {
    ShortTitle: 'Religion',
    FullTitle: 'Religious',
    icon: FaPrayingHands,
  },
  {
    ShortTitle: 'Sports',
    FullTitle: 'Sports & Recreation',
    icon: GiSoccerBall,
  },
  {
    ShortTitle: 'STEM',
    FullTitle: 'STEM',
    icon: FaMicroscope,
  },
  {
    ShortTitle: 'Other',
    FullTitle: 'Other',
    icon: IoIosMore,
  },
];
