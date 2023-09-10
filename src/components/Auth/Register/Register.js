import React from 'react';
import Auth from '../Auth';
import InputElement from '../../Elements/InputElement/InputElement';

function Register() {
  return (
    <Auth
      formName="registration"
      authText="Уже зарегистрированы?"
      linkText="Войти"
      titleText="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      path="/signin"
    >
      <InputElement
        labelText="Имя"
        type="text"
        name="name"
        placeholder="Имя"
        minLength="2"
        maxLength="30"
        autoComplete="off"
      />

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

export default Register;
