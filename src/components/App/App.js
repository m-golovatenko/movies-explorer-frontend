import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '..//Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import './App.css';
import { useState } from 'react';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
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
          element={<Profile setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />}
        ></Route>
        <Route path="/signin" element={<Login  handleLogin={() => setLoggedIn(true)}/>}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
