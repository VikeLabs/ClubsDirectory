import { ClubData } from '../JSON/ClubData';
import rawData from '../JSON/ClubData.json';

const clubs = rawData as ClubData[];

export const findClubBySlug = (clubSlug: string) => clubs.find(({ slug }) => slug === clubSlug);

export const findClubsByCategory = (categorySlug: string) => clubs.filter(({ category }) => categorySlug === category);
