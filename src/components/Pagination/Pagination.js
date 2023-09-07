import React from 'react';
import './Pagination.css';
import { useLocation } from 'react-router-dom';

function Pagination() {
  const location = useLocation();
  return (
    <section className="pagination">
      <button
        className={
          location.pathname === '/movies'
            ? 'pagination__button'
            : 'pagination__button pagination__button_hidden'
        }
      >
        Ещё
      </button>
    </section>
  );
}

export default Pagination;
