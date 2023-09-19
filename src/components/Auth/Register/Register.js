import { React, useEffect } from 'react';
import Auth from '../Auth';
import InputElement from '../../Elements/InputElement/InputElement';
import { useFormWithValidation } from '../../../hooks/useValidation';

function Register({ handleSubmitRegister }) {
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitRegister(values);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <Auth
      formName="registration"
      authText="Уже зарегистрированы?"
      linkText="Войти"
      titleText="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      path="/signin"
      handleSubmit={handleSubmit}
      buttonClasName={
        isValid ? 'auth__save-button' : 'auth__save-button auth__save-button_disabled'
      }
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
        value={values.name || ''}
        handleChange={handleChange}
        errorText={errors.name}
        pattern="^[a-zA-Zа-яА-ЯЁё\s\-]+$"
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
        value={values.email || ''}
        handleChange={handleChange}
        errorText={errors.email}
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
        value={values.password || ''}
        handleChange={handleChange}
        errorText={errors.password}
      />
    </Auth>
  );
}

export default Register;
