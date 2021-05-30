import pec_logo from '../Assets/Images/pec.jpg';
import logo from '../Assets/Images/slack.jpg';

import { Photo } from './Photo';

// These icon are currently not being used. Saving them just incase we need to refer to them later.
// export const defaultCalIcon: Icon = { icon: IoIosCalendar };
// export const defaultSlackIcon: Icon = { icon: AiOutlineSlack };
// export const defaultEmailIcon: Icon = { icon: AiOutlineMail };
// export const defaultZoomIcon: Icon = { icon: SiZoom };

export const defaultPhotos: Photo[] = [
  {
    source: logo,
    alt: 'slack1',
  },
  {
    source: pec_logo,
    alt: 'slack2',
  },
  {
    source: logo,
    alt: 'slack3',
  },
];
