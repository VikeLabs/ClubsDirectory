import styled from '@emotion/styled';

const TitleDiv = styled.div`
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    margin-top: 10px;
    font-size: 32px;
  }
  grid-area: clubName;
  text-align: left;
  margin-left: 10px;
  margin-bottom: 10px;
  font-size: 37.5px;
  line-height: normal;
  color: #000;
  font-weight: bold;
`;

function TitleItem(props: { title: string }) {
  return (
    <TitleDiv>
      <h1>{props.title}</h1>
    </TitleDiv>
  );
}

export default TitleItem;
