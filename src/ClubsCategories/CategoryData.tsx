import { ComponentType } from 'react';
import { FaHandsHelping, FaPaintBrush, FaMusic, FaPrayingHands, FaMicroscope } from 'react-icons/fa';
import { GiKnifeFork, GiSoccerBall } from 'react-icons/gi';
import { GoLaw } from 'react-icons/go';
import { IoIosPeople, IoIosMore } from 'react-icons/io';
import { IoGameController, IoEarthOutline } from 'react-icons/io5';

export interface Category {
  ShortTitle: string;
  FullTitle: string;
  icon: ComponentType;
}

export const defaultCategory: Category[] = [
  {
    ShortTitle: 'Arts',
    FullTitle: 'Arts',
    icon: FaPaintBrush,
  },
  {
    ShortTitle: 'Community',
    FullTitle: 'Community Service',
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
    ShortTitle: 'Food',
    FullTitle: 'Food & Drink',
    icon: GiKnifeFork,
  },
  {
    ShortTitle: 'Gaming',
    FullTitle: 'Gaming',
    icon: IoGameController,
  },
  {
    ShortTitle: 'Music',
    FullTitle: 'Music',
    icon: FaMusic,
  },
  {
    ShortTitle: 'Politics',
    FullTitle: 'Politics',
    icon: GoLaw,
  },
  {
    ShortTitle: 'Religion',
    FullTitle: 'Religion',
    icon: FaPrayingHands,
  },
  {
    ShortTitle: 'Sports',
    FullTitle: 'Sports & Rec',
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
