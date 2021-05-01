import { ComponentType } from 'react';
import { FaHandsHelping, FaPaintBrush, FaMusic, FaPrayingHands, FaMicroscope } from 'react-icons/fa';
import { GiKnifeFork, GiSoccerBall } from 'react-icons/gi';
import { GoLaw } from 'react-icons/go';
import { IoIosPeople, IoIosMore } from 'react-icons/io';
import { IoGameController, IoEarthOutline } from 'react-icons/io5';

import {
  ArtMock,
  CommunityMock,
  CultureMock,
  EnvironmentMock,
  FoodMock,
  GamingMock,
  MusicMock,
  OtherMock,
  PoliticsMock,
  ReligionMock,
  SportsMock,
  STEMMock,
} from '../Assets/MockPages';

export interface Category {
  title: string;
  page: ComponentType;
  icon: ComponentType;
}

export const defaultCategory: Category[] = [
  {
    title: 'Arts',
    page: ArtMock,
    icon: FaPaintBrush,
  },
  {
    title: 'Community',
    page: CommunityMock,
    icon: FaHandsHelping,
  },
  {
    title: 'Culture',
    page: CultureMock,
    icon: IoIosPeople,
  },
  {
    title: 'Environment',
    page: EnvironmentMock,
    icon: IoEarthOutline,
  },
  {
    title: 'Food',
    page: FoodMock,
    icon: GiKnifeFork,
  },
  {
    title: 'Gaming',
    page: GamingMock,
    icon: IoGameController,
  },
  {
    title: 'Music',
    page: MusicMock,
    icon: FaMusic,
  },
  {
    title: 'Politics',
    page: PoliticsMock,
    icon: GoLaw,
  },
  {
    title: 'Religion',
    page: ReligionMock,
    icon: FaPrayingHands,
  },
  {
    title: 'Sports',
    page: SportsMock,
    icon: GiSoccerBall,
  },
  {
    title: 'STEM',
    page: STEMMock,
    icon: FaMicroscope,
  },
  {
    title: 'Other',
    page: OtherMock,
    icon: IoIosMore,
  },
];
