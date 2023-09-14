import React from 'react';
import Auth from '../Auth';
import InputElement from '../../Elements/InputElement/InputElement';
import { authApi } from '../../../utils/AuthApi';
import { useNavigate } from 'react-router-dom';


function Register() {
  const [formValue, setFormValue] = React.useState({ password: '', email: '', name: '' });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  function handleRegister(e) {
    e.preventDefault();
    const { password, email, name } = formValue;
    authApi
      .register(password, email, name)
      .then(() => {
        navigate('/signin');
      })
      .catch(e => {
        console.error(`Ошибка при регистрации пользователя: код ошибки (${e})`);
      });
  }

  return (
    <Auth
      formName="registration"
      authText="Уже зарегистрированы?"
      linkText="Войти"
      titleText="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      path="/signin"
      handleSubmit={handleRegister}
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
