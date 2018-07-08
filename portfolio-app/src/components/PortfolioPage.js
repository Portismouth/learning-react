import React from 'react';
import { NavLink, Link } from 'react-router-dom';


const PortfolioPage = () => {
  return (
    <div>
      <p>This is the portfolio page</p>
      <Link to="portfolio/123">Item 1</Link>
      <Link to="portfolio/456">Item 2</Link>
    </div>
  );
}

export default PortfolioPage;
