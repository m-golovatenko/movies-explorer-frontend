import { React, useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
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
import { errorTexts } from '../../utils/errorTexts';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState(
    JSON.parse(localStorage.getItem('savedMovies')) || []
  );
  const [errorText, setErrorText] = useState('');
  const [isReqDone, setIsReqDone] = useState(true);
  const [fetching, setIsFetching] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (isLoggedIn) {
      mainApi
        .getCurrentUser(jwt)
        .then(userData => {
          setCurrentUser(userData);
        })
        .catch(err =>
          console.error(`Что-то пошло не так при загрузке данных пользователя: ${err}`)
        );
    }
  }, [isLoggedIn]);

  function handleSubmitLogin({ password, email }) {
    setIsFetching(true);
    authApi
      .login(password, email)
      .then(data => {
        localStorage.setItem('jwt', data.token);
        setLoggedIn(true);
        navigate('/movies', { replace: true });
        setIsReqDone(true);
      })

      .catch(e => {
        setErrorText(e === 401 ? errorTexts.login.wrongData : errorTexts.login.wrongToken);

        if (e === 500) {
          setErrorText(errorTexts.other.error500);
        }
        setIsReqDone(false);
        console.error(`Ошибка при входе. Код ошибки: ${e}`);
      })
      .finally(() => setIsFetching(false));
  }

  function handleSubmitRegister({ password, email, name }) {
    setIsFetching(true);
    authApi
      .register(password, email, name)
      .then(() => {
        handleSubmitLogin({ password, email });
        setIsReqDone(true);
      })
      .catch(e => {
        setIsReqDone(false);
        setErrorText(e === 409 ? errorTexts.registration.exist : errorTexts.registration.error);
        if (e === 500) {
          setErrorText(errorTexts.other.error500);
        }
        console.error(`Ошибка при регистрации пользователя: код ошибки (${e})`);
      })
      .finally(() => setIsFetching(false));
  }

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    const path = location.pathname;
    if (jwt)
      authApi
        .checkToken(jwt)
        .then(data => {
          setLoggedIn(true);
          setCurrentUser(data);
          if (location.pathname === '/signin' || location.pathname === '/signup') {
            navigate('/', { replace: true });
          } else {
            navigate(path, { replace: true });
          }
        })
        .catch(e => {
          setLoggedIn(false);
          console.error(`Что-то пошло не так при проверке токена: ${e}`);
        });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (isLoggedIn && currentUser) {
      mainApi
        .getSavedMovies(jwt)
        .then(savedMovies => {
          const userMovies = savedMovies.filter(movie => movie.owner === currentUser._id);
          localStorage.setItem('savedMovies', JSON.stringify(userMovies));
          setSavedMovies(userMovies);
        })
        .catch(e => console.error('Ошибка при получении сохраненных фильмов'));
    }
    // eslint-disable-next-line
  }, [isLoggedIn, currentUser]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        {location.pathname === '/' ||
        location.pathname === '/movies' ||
        location.pathname === '/saved-movies' ||
        location.pathname === '/profile' ? (
          <Header isLoggedIn={isLoggedIn} />
        ) : (
          ''
        )}
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                setLoggedIn={setLoggedIn}
                setCurrentUser={setCurrentUser}
                isLoggedIn={isLoggedIn}
              />
            }
          />

          <Route
            path="/signin"
            element={
              <Login
                handleSubmitLogin={handleSubmitLogin}
                errorText={errorText}
                isReqDone={isReqDone}
                fetching={fetching}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                handleSubmitRegister={handleSubmitRegister}
                errorText={errorText}
                isReqDone={isReqDone}
                fetching={fetching}
              />
            }
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
