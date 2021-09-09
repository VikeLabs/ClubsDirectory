import styled from '@emotion/styled';
import { IoMdLink } from 'react-icons/io';

import Icon from './Icon';

const LinkListDiv = styled.ul`
  grid-area: links;
  text-align: left;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
  margin-top: 20px;
  margin-left: 15%;
`;

function LinkItem(props: { link: string }) {
  return (
    <div>
      <Icon icon={IoMdLink}></Icon>
      <p>{props.link}</p>
    </div>
  );
}

function LinkList(props: { links: string[] }) {
  return (
    <LinkListDiv>
      <ul className="link-list">
        {props.links.map((link) => {
          return <LinkItem link={link} />;
        })}
      </ul>
    </LinkListDiv>
  );
}

export default LinkList;
