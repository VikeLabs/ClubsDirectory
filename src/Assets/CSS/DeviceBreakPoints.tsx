const size = {
  mobileTiny: '299px',
  mobileXS: '320px',
  mobileS: '400px',
  mobile: '767px', // Smartphones range from 0px to 767px
  tabletS: '768px', // Tablets range from 768px to 1023px
  tablet: '1023px',
  laptop: '1024px',
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobile: `(max-width: ${size.mobile})`,
  laptop: `(max-width: ${size.laptop})`,
};

export const categoryDevice = {
  mobileTiny: `(max-width: ${size.mobileTiny})`,
  mobileXS: `(min-width: 300px) and (max-width: ${size.mobileXS})`,
  mobileS: `(min-width: 321px) and (max-width: ${size.mobileS})`,
  mobile: `(min-width: 401px) and (max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tabletS}) and (max-width: ${size.tablet})`,
  tabletL: `(min-width: ${size.laptop}) and (max-width: ${size.laptop})`,
};
