import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

function Auth(props) {
  return (
    <section className="auth">
      <div className="auth__content">
        <Link to="/" className="auth__logo" aria-label="Логотип учебного прокта" />
        <h2 className="auth__title">{props.titleText}</h2>
        <form className="auth__form" name={props.formName} noValidate>
          <ul className="auth__form-list">{props.children}</ul>
        </form>
      </div>
      <div className="auth__buttons">
        <button className="auth__save-button" type="submit" aria-label="Зарегистрироваться">
          {props.buttonText}
        </button>

        <p className="auth__text">
          {props.authText}
          <Link to={props.path} className="auth__link">
            {props.linkText}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Auth;
