// ClubData is to be used with the JSON data (casting)
export interface ClubData {
  id: string;
  name: string;
  category: string;
  primaryEmail: string;
  socialMedia: string[];
  slug: string;
  members: string;
  tags: string[];
  description: string;
  createdDate: string;
}
