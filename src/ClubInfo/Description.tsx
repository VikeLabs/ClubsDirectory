import styled from '@emotion/styled';

const Box = styled.div`
  @media screen and (max-width: 768px) {
    margin: 0;
  }

  grid-area: description;
  text-align: left;
  margin: 10px 50px 10px 10px;
`;

function DescriptionItem(props: { description: string }) {
  return <Box color="#000">{props.description}</Box>;
}

export default DescriptionItem;
