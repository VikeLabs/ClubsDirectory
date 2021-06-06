import { Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonIcon = styled(Center)`
  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
  font-size: 100px;
  padding-bottom: 10px;
`;

const ButtonLabel = styled.p`
  margin-top: -5px;
`;

const CategoryTitle = styled.h1`
  @media screen and (max-width: 768px) {
    font-size: 50px;
    color: black;
    margin-left: 30px;
  }
  position: flex;
  font-size: 60px;
  font-weight: 600;
  margin-left: 39px;
  margin-top: 60px;
  color: white;
  font-style: normal;
`;

const Grid = styled.div`
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 100px);
    margin-left: 20px;
    grid-column-gap: 100px;
  }
  display: grid;
  margin-left: 200px;
  margin-top: 50px;
  padding-bottom: 100px;
  grid-template-columns: repeat(3, 100px);
  grid-auto-rows: minmax(100px, auto);
  grid-row-gap: 40px;
  grid-column-gap: 250px;
`;

const Gridbutton = styled.button`
  @media screen and (max-width: 768px) {
    width: 175px;
    height: 175px;
    font-size: 30px;
  }
  font-weight: 500;
  font-size: 50px;
  width: 300px;
  height: 300px;
  color: black;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
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

const LinkButton = styled(Link)`
  text-decoration: none;
`;

export { Grid, Gridbutton, CategoryTitle, ButtonIcon, ButtonLabel, LinkButton };
