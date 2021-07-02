const size = {
  mobileTiny: '299px',
  mobileXS: '320px',
  mobileS: '400px',
  mobile: '767px', // Smartphones range from 0px to 767px
  tabletS: '768px', // Tablets range from 768px to 1023px
  tablet: '1023px',
  laptopS: '1024px',
  laptop: '1299px',
  desktop: '1300px',
};

// Breakpoints for when styling is needed on either a max or min width.
export const device = {
  mobileTiny: `(max-width: ${size.mobileTiny})`,  // Styling for screen widths <= 299px
  mobileS: `(max-width: ${size.mobileS})`,  // Styling for screen widths <= 400px
  mobile: `(max-width: ${size.mobile})`,  // Styling for screen widths <= 767px
  laptop: `(max-width: ${size.laptop})`,  // Styling for screen widths <= 1299px
  desktop: `(min-width: ${size.desktop})`,  // Styling for screen widths >= 1300px
};

// Breakpoints for when styling is needed in a width range.
export const categoryDevice = {
  mobileXS: `(min-width: 300px) and (max-width: ${size.mobileXS})`, // Styling for screen widths between 300px - 320px
  mobileS: `(min-width: 321px) and (max-width: ${size.mobileS})`, // Styling for screen widths between 321px - 400px
  mobile: `(min-width: 401px) and (max-width: ${size.mobile})`, // Styling for screen widths between 401px - 767px
  tablet: `(min-width: ${size.tabletS}) and (max-width: ${size.tablet})`, // Styling for screen widths between 768px - 1023px
  tabletL: `(min-width: ${size.laptopS}) and (max-width: ${size.laptopS})`, // Styling for screen widths between 1024px - 1024px
  laptop: `(min-width: ${size.tabletS}) and (max-width: ${size.laptop})`, // Styling for screen widths between 768px - 1299px
};
