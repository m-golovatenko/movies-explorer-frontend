import { React, useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Movies from '..//Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { authApi } from '../../utils/AuthApi';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import { filterMovies } from '../../utils/utils';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [initialMovies, setInitialMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const location = useLocation();
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
        if (location.pathname === '/signin' || location.pathname === '/signup') {
          navigate('/movies', { replace: true });
        }
      })
      .catch(e => {
        setLoggedIn(false);
        console.error(`Что-то пошло не так: ${e}`);
      });
  }

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
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

  useEffect(() => {
    if (isLoggedIn) {
      moviesApi
        .getAllMovies()
        .then(movies => {
          localStorage.setItem('movies', JSON.stringify(movies));
          const filteredMovies = filterMovies(movies);
          setInitialMovies(filteredMovies);
        })
        .catch(e => console.error('Ошибка при получении фильмов'));
    }
  }, [isLoggedIn, setInitialMovies]);

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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        {location.pathname === '/' ||
        location.pathname === '/movies' ||
        location.pathname === '/saved-movies' ||
        location.pathname === '/profile' ? (
          <Header isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
        ) : (
          ''
        )}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <Movies
                initialMovies={initialMovies}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <SavedMovies
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/profile"
            element={<Profile setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} />}
          />

          <Route path="/signin" element={<Login handleSubmitLogin={handleSubmitLogin} />} />
          <Route
            path="/signup"
            element={<Register handleSubmitRegister={handleSubmitRegister} />}
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>

        {location.pathname === '/' ||
        location.pathname === '/movies' ||
        location.pathname === '/saved-movies' ? (
          <Footer />
        ) : (
          ''
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
