function PhotoItem(props: { source: string; alt: string }) {
  return <img src={props.source} alt={props.alt}></img>;
}

export default PhotoItem;
