import styled from '@emotion/styled';

import VikeLabsLogo from '../Assets/Images/Vike_Labs_Icon.png';
import { ImageWithFallback } from '../components/ImageWithFallback';

import './photo.css';

const LogoDiv = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  text-align: left;
  grid-area: 'logo';
  margin-left: 15%;
  overflow: visible;
`;

export interface Logo {
  source: string;
  alt: string;
}
export interface LogoProps {
  logo: Logo;
}

function LogoItem(props: { source: string; alt: string }) {
  return (
    <LogoDiv>
      <ImageWithFallback src={process.env.PUBLIC_URL + '/Logos/' + props.source + '.png'} fallback={VikeLabsLogo} />
    </LogoDiv>
  );
}

export default LogoItem;
