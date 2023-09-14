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
              <Login handleLogin={() => setLoggedIn(true)} setCurrentUser={setCurrentUser} />
            }
          ></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
