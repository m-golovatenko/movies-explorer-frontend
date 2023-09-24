import React from 'react';
import './Profile.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useValidation';
import { mainApi } from '../../utils/MainApi';
import ServerError from '../Elements/ServerError/ServerError';
import { errorTexts } from '../../utils/errorTexts';

function Profile({ setLoggedIn, setCurrentUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();
  const [isChanged, setIsChanged] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [isReqDone, setIsReqDone] = useState(true);
  const [isSuccess, setIsSuccess] = useState(null);
  const [fetching, setIsFetching] = useState(null);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleUpdateUser(userData) {
    const jwt = localStorage.getItem('jwt');
    setIsFetching(true);
    mainApi
      .changeUserInfo(userData, jwt)
      .then(newUserData => {
        setCurrentUser(newUserData);
        setIsReqDone(true);
        setIsSuccess(true);
      })
      .catch(e => {
        setErrorText(e === 409 ? errorTexts.profile.exist : errorTexts.profile.error);
        if (e === 500) {
          setErrorText(errorTexts.other.error500);
        }
        setIsReqDone(false);
        setIsSuccess(false);
        console.error(`Ошибка при изменении данных пользователя: ${e}`);
      })
      .finally(() => setIsFetching(false));
  }

  function handleLogout() {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
    navigate('/');
  }

  useEffect(() => {
    resetForm({ name: currentUser.name, email: currentUser.email });
  }, [resetForm, currentUser]);

  useEffect(() => {
    if (values.name !== currentUser.name || values.email !== currentUser.email) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
  }, [currentUser, values]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
    handleUpdateUser(values);
  }

  return (
    <main className="profile" aria-label="profile">
      <div className="profile__data">
        <h1 className="profile__greetings">Привет, {currentUser.name}!</h1>
        <form name="profile" onSubmit={handleSubmit} noValidate>
          <ul className="profile__info">
            <li className="profile__info-item">
              <div className="profile__info-item-content">
                <label className="profile__info-item-title">Имя</label>
                <input
                  className={
                    !isEditing
                      ? 'profile__info-item-input'
                      : 'profile__info-item-input profile__info-item-input_active'
                  }
                  type="text"
                  name="name"
                  placeholder="Имя"
                  minLength="2"
                  maxLength="30"
                  value={values.name || ''}
                  onChange={handleChange}
                  pattern="^[a-zA-Zа-яА-ЯЁё\s\-]+$"
                  required
                />
              </div>
              <span className={isValid ? 'profile__error' : 'profile__error profile__error_active'}>
                {errors.name}
              </span>
            </li>

            <li className="profile__info-item">
              <div className="profile__info-item-content">
                <label className="profile__info-item-title">E-mail</label>
                <input
                  className={
                    !isEditing && isReqDone
                      ? 'profile__info-item-input'
                      : 'profile__info-item-input profile__info-item-input_active'
                  }
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  value={values.email || ''}
                  onChange={handleChange}
                  required
                />
              </div>
              <span className={isValid ? 'profile__error' : 'profile__error profile__error_active'}>
                {errors.email}
              </span>
            </li>
          </ul>
        </form>
      </div>
      {!isEditing && isReqDone && !fetching ? (
        <ul className="profile__links">
          {isSuccess ? (
            <li>
              <p className="profile__success">Данные успешно обновлены</p>
            </li>
          ) : (
            ''
          )}

          <li>
            <button className="profile__links-item" onClick={handleEdit} type="button">
              Редактировать
            </button>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="profile__links-item profile__links-item_red"
              type="button"
            >
              Выйти из аккаунта
            </button>
          </li>
        </ul>
      ) : (
        <div className="profile__edit">
          <ServerError errorText={errorText} isReqDone={isReqDone} />
          <button
            className={
              isValid && isChanged ? 'profile__save' : 'profile__save profile__save_disabled'
            }
            onClick={handleSubmit}
            type="submit"
          >
            Сохранить
          </button>
        </div>
      )}
    </main>
  );
}

export default Profile;
