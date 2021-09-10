import { useParams } from 'react-router-dom';

import Logo from '../Assets/Images/Vike_Labs_Icon.png';
import { findClubBySlug } from '../JSON/helpers';
import { Error404Page } from '../pages/error/404';

import { GridDiv, RightSubGridDiv } from './ClubInfoPageStyledComponents';
import Description from './Description';
import LinkList from './Links';
import LogoItem from './Logo';
import PathItem from './Path';
import TagList from './Tags';
import Title from './Title';

interface subGridProps {
  membersAndDates: string[];
  title: string;
  tags: string[];
  categorySlug: string;
  clubName: string;
}

function RightSubGrid(props: subGridProps) {
  const title = props.title;
  const tags = props.tags;

  return (
    <RightSubGridDiv>
      <PathItem category={props.categorySlug} clubName={props.clubName}></PathItem>
      <Title title={title} />
      <TagList tags={tags} />
    </RightSubGridDiv>
  );
}

function ClubInfoPage() {
  // grab route params using react-router-dom
  const { slug } = useParams<{ category: string; slug: string }>();

  const club = findClubBySlug(slug);

  if (!club) return <Error404Page />;

  const { name, tags, description, socialMedia, category: categorySlug } = club;

  return (
    <div>
      <GridDiv>
        <LogoItem source={slug} alt={'clubName'}></LogoItem>
        <RightSubGrid clubName={name} categorySlug={categorySlug} membersAndDates={[]} title={name} tags={tags} />
        <Description description={description} />
        <LinkList links={socialMedia}></LinkList>
      </GridDiv>
    </div>
  );
}

export default ClubInfoPage;
