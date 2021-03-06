// Prop for holding club data for the club listing page.
export interface ClubListData {
  clubName: string;
  clubCategory: string;
  clubDescription: string;
  clubTags: string[];
  clubImage: string;
}

// Prop for holding the detailed club data.
export interface ClubInfoData {
  clubName: string;
  clubDescription: string;
  clubTags: string[];
  clubImage: string;
  clubMembersAndCreationDate: string[];
  clubLinks: string[];
  // Will need to add other properties for the additional links and photos.
  // clubOtherLinks: string;
}
