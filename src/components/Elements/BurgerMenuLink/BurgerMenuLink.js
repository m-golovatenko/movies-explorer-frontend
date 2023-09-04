import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenuLink.css';

function BurgerMenuLink({ path, linkText }) {
  return (
    <Link to={path} className="burger-menu-link">
      {linkText}
    </Link>
  );
}

export default BurgerMenuLink;
