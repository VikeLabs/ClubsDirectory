import { Button } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { FaDiscord, FaFacebook, FaInstagram, FaLink } from 'react-icons/fa';
import styled from 'styled-components';

import Icon from './Icon';

const LinkListDiv = styled.ul`
  grid-area: links;
  text-align: left;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
  overflow: auto;
  margin-top: 20px;
  margin-left: 15%;
`;

const urlStart = /^https?:\/\/(www\.)?/;
const urlQueries = /\?.*$/;

function simplifyURL(url: string) {
  return url.replace(urlStart, '').replace(urlQueries, '');
}

function getIcon(url: string): IconType {
  const defaultIcon: IconType = FaLink;
  const urlMap: { [key: string]: IconType } = {
    'facebook.com': FaFacebook,
    'instagram.com': FaInstagram,
    'discord.gg': FaDiscord,
  };

  const domain = new URL(url).hostname.replace(/^www\./, '');

  return urlMap[domain] ?? defaultIcon;
}

function LinkItem(props: { link: string }) {
  return (
    <Button size="sm" style={{ maxWidth: '100%' }}>
      <a
        href={props.link}
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Icon icon={getIcon(props.link)}></Icon>
        <span style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>{simplifyURL(props.link)}</span>
      </a>
    </Button>
  );
}

function LinkList(props: { links: string[] }) {
  return (
    <LinkListDiv>
      <ul className="link-list">
        {props.links
          .filter((s) => s !== '')
          .map((link) => (
            <LinkItem link={link} />
          ))}
      </ul>
    </LinkListDiv>
  );
}

export default LinkList;
