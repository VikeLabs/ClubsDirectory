import { IconType } from 'react-icons';
import { FaDiscord, FaFacebook, FaInstagram, FaLink } from 'react-icons/fa';

import { IconItem } from '../../../components/Icon';

const urlStart = /^https?:\/\/(www\.)?/;
const urlQueries = /\?.*$/;
const trailingSlash = /\/$/;

const urlMap: { [key: string]: IconType } = {
  'facebook.com': FaFacebook,
  'instagram.com': FaInstagram,
  'discord.gg': FaDiscord,
};

const simplifyURL = (url: string) => {
  return url.replace(urlStart, '').replace(urlQueries, '').replace(trailingSlash, '');
};

const getIcon = (url: string): IconType => {
  const defaultIcon: IconType = FaLink;

  const domain = new URL(url).hostname.replace(/^www\./, '');

  return urlMap[domain] ?? defaultIcon;
};

const LinkItem = (props: { link: string }) => (
  <a
    href={props.link}
    rel="noreferrer"
    target="_blank"
    style={{
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: 'flex',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      fontSize: '0.9em',
      textDecoration: 'underline',
      padding: '0.05em 0',
    }}
  >
    <IconItem icon={getIcon(props.link)}></IconItem>
    <span style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>{simplifyURL(props.link)}</span>
  </a>
);

export const LinkList = (props: { links: string[] }) => {
  return (
    <ul>
      {props.links
        .filter((s) => s !== '')
        .map((link) => (
          <LinkItem link={link} />
        ))}
    </ul>
  );
};
