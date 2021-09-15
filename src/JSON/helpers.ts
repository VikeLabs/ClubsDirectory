import { ClubData } from '../JSON/ClubData';
import ClubDataRaw from '../JSON/ClubData.json';
import CourseUnionDataRaw from '../JSON/CourseUnionData.json';

const clubs = ClubDataRaw as ClubData[];
const courseUnions = CourseUnionDataRaw as ClubData[];

const groups = [...clubs, ...courseUnions];

export const findClubBySlug = (clubSlug: string) => groups.find(({ slug }) => slug === clubSlug);

export const findClubsByCategory = (categorySlug: string) => groups.filter(({ category }) => categorySlug === category);
