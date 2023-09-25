import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import ServerError from '../Elements/ServerError/ServerError';

function Auth(props) {
  return (
    <main className="auth">
      <div className="auth__content">
        <Link to="/" className="auth__logo" aria-label="Логотип учебного прокта" />
        <h1 className="auth__title">{props.titleText}</h1>
        <form className="auth__form" name={props.formName} onSubmit={props.handleSubmit} noValidate>
          <ul className="auth__form-list">{props.children}</ul>

          <div className="auth__buttons">
            <ServerError errorText={props.errorText} isReqDone={props.isReqDone} />
            <button className={props.buttonClasName} type="submit" aria-label="Зарегистрироваться">
              {props.buttonText}
            </button>

            <p className="auth__text">
              {props.authText}
              <Link to={props.path} className="auth__link">
                {props.linkText}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Auth;
