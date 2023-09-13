import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenuLink.css';

function BurgerMenuLink({ path, linkText, handleClick }) {
  return (
    <Link to={path} className="burger-menu-link" onClick={handleClick}>
      {linkText}
    </Link>
  );
}

export default BurgerMenuLink;
