import VikeLabsLogo from '../Assets/Images/Vike_Labs_Icon.png';
import { ImageWithFallback } from '../components/ImageWithFallback';

function PhotoItem(props: { source: string; alt: string }) {
  return <ImageWithFallback src={props.source} alt={props.alt} fallback={VikeLabsLogo} />;
}

export default PhotoItem;
