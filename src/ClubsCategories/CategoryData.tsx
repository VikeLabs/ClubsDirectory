import { ComponentType } from 'react';
import { FaHandsHelping, FaPaintBrush, FaPrayingHands, FaMicroscope } from 'react-icons/fa';
import { GiSoccerBall } from 'react-icons/gi';
import { GoLaw } from 'react-icons/go';
import { HiOutlineSparkles } from 'react-icons/hi';
import { IoIosPeople, IoIosMore } from 'react-icons/io';
import { IoEarthOutline } from 'react-icons/io5';

// This interface is for used for storing information about each category.
export interface Category {
  ShortTitle: string; // String for the short form of a category name.
  FullTitle: string; // String for the full name of a cateogry.
  icon: ComponentType; // ComponentType for storing the icon of each button.
}

// Categories is an array of objects, where the object is the Category interface.
// This array is used for creating the button matrix(See CategoryButtonMatrix.tsx).
export const Categories: Category[] = [
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
