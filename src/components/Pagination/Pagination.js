import React from 'react';
import './Pagination.css';
import { useLocation } from 'react-router-dom';

function Pagination({ loadMore }) {
  const location = useLocation();
  return (
    <section className="pagination" aria-label="pagination">
      <button
        className={
          location.pathname === '/movies'
            ? 'pagination__button'
            : 'pagination__button pagination__button_hidden'
        }
        type="button"
        onClick={loadMore}
      >
        Ещё
      </button>
    </section>
  );
}

export default Pagination;
