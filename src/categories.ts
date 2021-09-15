import { ComponentType } from 'react';
import { FaHandsHelping, FaPaintBrush, FaPrayingHands, FaMicroscope } from 'react-icons/fa';
import { GiSoccerBall } from 'react-icons/gi';
import { GoLaw } from 'react-icons/go';
import { HiAcademicCap, HiOutlineSparkles } from 'react-icons/hi';
import { IoIosPeople, IoIosMore } from 'react-icons/io';
import { IoEarthOutline } from 'react-icons/io5';

export interface Category {
  shortTitle: string;
  fullTitle: string;
  slug: string;
  icon: ComponentType;
}

// for storing each category name (full and shorthand) and their icon.
// slug is used for the URL like for page routing
export const CATEGORIES: Category[] = [
  {
    shortTitle: 'Arts',
    fullTitle: 'Arts',
    slug: 'arts',
    icon: FaPaintBrush,
  },
  {
    shortTitle: 'Community',
    fullTitle: 'Community Service & Volunteer',
    slug: 'community-service-and-volunteer',
    icon: FaHandsHelping,
  },
  {
    shortTitle: 'Culture',
    fullTitle: 'Cultural',
    slug: 'culture',
    icon: IoIosPeople,
  },
  {
    shortTitle: 'Environment',
    fullTitle: 'Environmental',
    slug: 'environment',
    icon: IoEarthOutline,
  },
  {
    shortTitle: 'Interest',
    fullTitle: 'Interest',
    slug: 'interest',
    icon: HiOutlineSparkles,
  },
  {
    shortTitle: 'Politics',
    fullTitle: 'Political',
    slug: 'politics',
    icon: GoLaw,
  },
  {
    shortTitle: 'Religion',
    fullTitle: 'Religious',
    slug: 'religion',
    icon: FaPrayingHands,
  },
  {
    shortTitle: 'Sports',
    fullTitle: 'Sports & Recreation',
    slug: 'sports-and-recreation',
    icon: GiSoccerBall,
  },
  {
    shortTitle: 'STEM',
    fullTitle: 'STEM',
    slug: 'stem',
    icon: FaMicroscope,
  },
  {
    shortTitle: 'Course Unions',
    fullTitle: 'Course Unions',
    slug: 'course-union',
    icon: HiAcademicCap,
  },
  {
    shortTitle: 'Other',
    fullTitle: 'Other',
    slug: 'other',
    icon: IoIosMore,
  },
];
