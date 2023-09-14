import React from 'react';
import Auth from '../Auth';
import InputElement from '../../Elements/InputElement/InputElement';
import { authApi } from '../../../utils/AuthApi';
import { useNavigate } from 'react-router-dom';

function Login({handleLogin}) {
  const [formValue, setFormValue] = React.useState({ password: '', email: '' });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { password, email } = formValue;

    authApi
      .login(password, email)
      .then(data => {
        localStorage.setItem('jwt', data.token);
        handleLogin();
        navigate('/movies');
      })

      .catch(err => {
        console.error(`Ошибка при входе. Код ошибки: ${err}`)});
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
