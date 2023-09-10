import React from 'react';
import Auth from '../Auth';
import InputElement from '../../Elements/InputElement/InputElement';

function Login() {
  return (
    <Auth
      formName="login"
      authText="Ещё не зарегистрированы?"
      linkText="Регистрация"
      titleText="Рады видеть!"
      buttonText="Войти"
      path="/signup"
    >
      <InputElement
        labelText="E-mail"
        type="email"
        name="email"
        placeholder="Email"
        minLength="2"
        maxLength="30"
        autoComplete="email"
      />

      <InputElement
        labelText="Пароль"
        type="password"
        name="password"
        placeholder="Пароль"
        minLength="6"
        maxLength="30"
        autoComplete="off"
      />
    </Auth>
  );
}

export default Login;
