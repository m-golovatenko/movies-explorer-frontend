import { React, useEffect } from 'react';
import Auth from '../Auth';
import InputElement from '../../Elements/InputElement/InputElement';
import { useFormWithValidation } from '../../../hooks/useValidation';

function Login({ handleSubmitLogin, errorText, isReqDone }) {
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitLogin(values);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <Auth
      formName="login"
      authText="Ещё не зарегистрированы?"
      linkText="Регистрация"
      titleText="Рады видеть!"
      buttonText="Войти"
      path="/signup"
      handleSubmit={handleSubmit}
      buttonClasName={
        isValid ? 'auth__save-button' : 'auth__save-button auth__save-button_disabled'
      }
      errorText={errorText}
      isReqDone={isReqDone}
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
        minLength="8"
        maxLength="30"
        autoComplete="off"
        value={values.password || ''}
        handleChange={handleChange}
        errorText={errors.password}
      />
    </Auth>
  );
}

export default Login;
