import React from 'react';
import './NotFoundPage.css';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="page-not-found">
      <div className="page-not-found__content">
        <h1 className="page-not-found__code">404</h1>
        <p className="page-not-found__text">Страница не найдена</p>
      </div>
      <Link to={-1} className="page-not-found__back">
        Назад
      </Link>
    </section>
  );
}

export default NotFoundPage;
