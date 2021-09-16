import { IconType } from 'react-icons';
import { FaDiscord, FaFacebook, FaInstagram, FaLink } from 'react-icons/fa';

import IconItem from '../ClubInfo/Icon';

const urlStart = /^https?:\/\/(www\.)?/;
const urlQueries = /\?.*$/;
const trailingSlash = /\/$/;

const urlMap: { [key: string]: IconType } = {
  'facebook.com': FaFacebook,
  'instagram.com': FaInstagram,
  'discord.gg': FaDiscord,
};

function simplifyURL(url: string) {
  return url.replace(urlStart, '').replace(urlQueries, '').replace(trailingSlash, '');
}

function getIcon(url: string): IconType {
  const defaultIcon: IconType = FaLink;

  const domain = new URL(url).hostname.replace(/^www\./, '');

  return urlMap[domain] ?? defaultIcon;
}

function LinkItem(props: { link: string }) {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      href={props.link}
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
}

export function LinkList(props: { links: string[] }) {
  return (
    <ul>
      {props.links
        .filter((s) => s !== '')
        .map((link) => (
          <LinkItem link={link} />
        ))}
    </ul>
  );
}
