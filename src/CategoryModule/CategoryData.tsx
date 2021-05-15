import { ComponentType } from 'react';
import { FaHandsHelping, FaPaintBrush, FaMusic, FaPrayingHands, FaMicroscope } from 'react-icons/fa';
import { GiKnifeFork, GiSoccerBall } from 'react-icons/gi';
import { GoLaw } from 'react-icons/go';
import { IoIosPeople, IoIosMore } from 'react-icons/io';
import { IoGameController, IoEarthOutline } from 'react-icons/io5';

export interface Category {
  title: string;
  icon: ComponentType;
}

export const defaultCategory: Category[] = [
  {
    title: 'Arts',
    icon: FaPaintBrush,
  },
  {
    title: 'Community',
    icon: FaHandsHelping,
  },
  {
    title: 'Culture',
    icon: IoIosPeople,
  },
  {
    title: 'Environment',
    icon: IoEarthOutline,
  },
  {
    title: 'Food',
    icon: GiKnifeFork,
  },
  {
    title: 'Gaming',
    icon: IoGameController,
  },
  {
    title: 'Music',
    icon: FaMusic,
  },
  {
    title: 'Politics',
    icon: GoLaw,
  },
  {
    title: 'Religion',
    icon: FaPrayingHands,
  },
  {
    title: 'Sports',
    icon: GiSoccerBall,
  },
  {
    title: 'STEM',
    icon: FaMicroscope,
  },
  {
    title: 'Other',
    icon: IoIosMore,
  },
];
