import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  margin-left: 300px;
  margin-top: 50px;
  padding-bottom: 100px;
  grid-template-columns: repeat(4, 100px);
  grid-auto-rows: minmax(100px, auto);
  grid-row-gap: 90px;
  grid-column-gap: 120px;
`;

const Gridbutton = styled.button`
  font-weight: 500;
  font-size: 20px;
  width: 162px;
  height: 162px;
  color: black;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border: 0px;
  background: #ffffff;
  border-radius: 12px;
  text-decoration: none;
  padding-top: 20px;
  &:hover {
    color: white;
    background: #1b8091;
  }
`;

const CategoryTitle = styled.h1`
  position: flex;
  font-size: 60px;
  margin-left: 39px;
  margin-top: 60px;
  font-family: Montserrat;
  font-style: normal;
`;

const ButtonIcon = styled.i`
  font-size: 80px;
`;

const ButtonLabel = styled.p`
  margin-top: -5px;
`;

const LinkButton = styled(Link)`
  text-decoration: none;
`;

export { Grid, Gridbutton, CategoryTitle, ButtonIcon, ButtonLabel, LinkButton };