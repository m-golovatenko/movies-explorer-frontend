import React from 'react';
import Auth from '../Auth';
import InputElement from '../../Elements/InputElement/InputElement';

function Login({ handleSubmitLogin, handleChange, formValue }) {
  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitLogin(formValue);
  }

  return (
    <Auth
      formName="login"
      authText="Ещё не зарегистрированы?"
      linkText="Регистрация"
      titleText="Рады видеть!"
      buttonText="Войти"
      path="/signup"
      handleSubmit={handleSubmit}
    >
      <InputElement
        inputId="auth__input-email"
        labelText="E-mail"
        type="email"
        name="email"
        placeholder="Email"
        minLength="2"
        maxLength="30"
        autoComplete="email"
        value={formValue.email || ''}
        handleChange={handleChange}
      />

      <InputElement
        inputId="auth__input-password"
        labelText="Пароль"
        type="password"
        name="password"
        placeholder="Пароль"
        minLength="6"
        maxLength="30"
        autoComplete="off"
        value={formValue.password || ''}
        handleChange={handleChange}
      />
    </Auth>
  );
}

export default Login;
