import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Assets/CSS/CategoryButton.css';
import styled from 'styled-components';

import { Category, defaultCategory } from './categoryData';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 10px;
`;

const Gridbutton = styled.button`
  display: flex;
  white-space: normal;
  align-items: center;
  width: 100px;
  height: 100px;
  justify-content: center;
  color: black;
  background: #3535f5;
  border-radius: 12px;
  text-decoration: none;
  &:hover {
    color: red;
    background: #1e1e9c;
  }
`;

const LinkButton = styled(Link)`
  text-decoration: none;
`;

interface CategoryProps {
  category: Category;
}

function CategoryItem(props: CategoryProps) {
  var title = props.category.title;
  return (
    // Linking the grid button to the correct page.
    <LinkButton to={`/${title}`}>
      <Gridbutton>{title}</Gridbutton>
    </LinkButton>
  );
}

function CategoryButtonMatrix() {
  // Array for storing all the category data.
  const [categoies] = useState(defaultCategory);
  return (
    <Grid>
      {categoies.map((category) => (
        // Creating all the category buttons to be displayed in the grid.
        <CategoryItem category={category} />
      ))}
    </Grid>
  );
}

export default CategoryButtonMatrix;
