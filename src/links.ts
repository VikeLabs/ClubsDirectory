export function generateCategoryLink(category: string): string {
  return `/ng/categories/${category}`;
}

// called "Group" since it imcludes both "Clubs" and "Course Unions" etc.
export function generateGroupLink(category: string, slug: string): string {
  return `/ng/categories/${category}/${slug}`;
}
