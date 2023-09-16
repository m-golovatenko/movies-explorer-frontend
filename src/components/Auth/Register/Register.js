import React from 'react';
import Auth from '../Auth';
import InputElement from '../../Elements/InputElement/InputElement';

function Register({ handleSubmitRegister, handleChange, formValue }) {
  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitRegister(formValue);
  }

  return (
    <Auth
      formName="registration"
      authText="Уже зарегистрированы?"
      linkText="Войти"
      titleText="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      path="/signin"
      handleSubmit={handleSubmit}
    >
      <InputElement
        inputId="auth__input-name"
        labelText="Имя"
        type="text"
        name="name"
        placeholder="Имя"
        minLength="2"
        maxLength="30"
        autoComplete="off"
        value={formValue.name || ''}
        handleChange={handleChange}
      />

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

export default Register;
