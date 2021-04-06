import React from 'react';

import CategoryPage from './CategoryPage';
import Sidebar from './Sidebar';
import './Assets/CSS/App.css';

function App() {
  return (
    <div className="club-landing">
      <h1>UVSS</h1>
      <h2>Club Categories</h2>
      <div className="category-page">
        <CategoryPage />
      </div>
      <div className="sidebar-page">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
