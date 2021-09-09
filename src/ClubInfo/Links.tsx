import { Button } from '@chakra-ui/react';
import { IoMdLink } from 'react-icons/io';
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

function LinkItem(props: { link: string }) {
  return (
    <Button size="sm" style={{ maxWidth: '100%' }}>
      <a href={props.link} style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
        <Icon icon={IoMdLink}></Icon>
        {simplifyURL(props.link)}
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
