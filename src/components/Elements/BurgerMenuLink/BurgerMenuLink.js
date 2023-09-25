import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenuLink.css';

function BurgerMenuLink({ path, linkText, handleClick, isActive }) {
  return (
    <Link
      to={path}
      className={!isActive ? 'burger-menu-link' : 'burger-menu-link burger-menu-link_active'}
      onClick={handleClick}
    >
      {linkText}
    </Link>
  );
}

export default BurgerMenuLink;
