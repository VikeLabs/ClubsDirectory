import React, { ComponentType } from 'react';

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
} from './Assets/MockPages';

export interface Category {
  title: string;
  page: ComponentType;
}

export const defaultCategory: Category[] = [
  {
    title: 'Arts',
    page: ArtMock,
  },
  {
    title: 'Community',
    page: CommunityMock,
  },
  {
    title: 'Culture',
    page: CultureMock,
  },
  {
    title: 'Environment',
    page: EnvironmentMock,
  },
  {
    title: 'Food',
    page: FoodMock,
  },
  {
    title: 'Gaming',
    page: GamingMock,
  },
  {
    title: 'Music',
    page: MusicMock,
  },
  {
    title: 'Politics',
    page: PoliticsMock,
  },
  {
    title: 'Religion',
    page: ReligionMock,
  },
  {
    title: 'Sports',
    page: SportsMock,
  },
  {
    title: 'STEM',
    page: STEMMock,
  },
  {
    title: 'Other',
    page: OtherMock,
  },
];
