import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Movies from '..//Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import './App.css';
import { useState } from 'react';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { authApi } from '../../utils/AuthApi';
import { mainApi } from '../../utils/MainApi';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [formValue, setFormValue] = React.useState({ password: '', email: '' });

  const navigate = useNavigate();

  function checkToken() {
    const jwt = localStorage.getItem('jwt');
    authApi
      .checkToken(jwt)
      .then(data => {
        if (!data) {
          return;
        }
        setLoggedIn(true);
        setCurrentUser(data);
        navigate('/movies', { replace: true });
      })
      .catch(e => {
        setLoggedIn(false);
      });
  }

  React.useEffect(() => {
    checkToken();
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (isLoggedIn) {
      mainApi
        .getCurrentUser(jwt)
        .then(userData => {
          setCurrentUser(userData);
        })
        .catch(err => console.error(`Что-то пошло не так: ${err}`));
    }
  }, [isLoggedIn]);

  function handleSubmitLogin({ password, email }) {
    authApi
      .login(password, email)
      .then(data => {
        localStorage.setItem('jwt', data.token);
        checkToken();
      })

      .catch(err => {
        console.error(`Ошибка при входе. Код ошибки: ${err}`);
      });
  }

  function handleSubmitRegister({ password, email, name }) {
    authApi
      .register(password, email, name)
      .then(() => {
        handleSubmitLogin({ password, email });
      })
      .catch(e => {
        console.error(`Ошибка при регистрации пользователя: код ошибки (${e})`);
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Routes>
          <Route path="/" element={<Main isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />} />
          <Route
            path="/movies"
            element={<Movies isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />}
          ></Route>
          <Route
            path="/saved-movies"
            element={<SavedMovies isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />}
          ></Route>
          <Route
            path="/profile"
            element={
              <Profile
                setLoggedIn={setLoggedIn}
                isLoggedIn={isLoggedIn}
                setCurrentUser={setCurrentUser}
              />
            }
          ></Route>
          <Route
            path="/signin"
            element={
              <Login
                handleSubmitLogin={handleSubmitLogin}
                handleChange={handleChange}
                formValue={formValue}
              />
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <Register
                handleSubmitRegister={handleSubmitRegister}
                handleChange={handleChange}
                formValue={formValue}
              />
            }
          ></Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
