import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '..//Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import Footer from '../Footer/Footer';
import './App.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <div className="root">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Учебное приложение для поиска фильмов." />
        <title>Movies Explorer</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {location.pathname !== '/signup' && location.pathname !== '/signin' ? (
        <Header isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      ) : (
        ''
      )}
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/saved-movies" element={<SavedMovies />}></Route>
        <Route path="/profile" element={<Profile setLoggedIn={setLoggedIn} />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
      </Routes>
      {location.pathname !== '/signup' && location.pathname !== '/signin' ? <Footer /> : ''}
    </div>
  );
}

export default App;
