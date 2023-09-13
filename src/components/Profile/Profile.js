import React from 'react';
import './Profile.css';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Profile({ isLoggedIn, setLoggedIn }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    setIsEditing(false);
  }

  function handleLogout() {
    setLoggedIn(false);
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      <main className="profile" aria-label="profile">
        <div className="profile__data">
          <h1 className="profile__greetings">Привет, Мария!</h1>
          <form name="profile" noValidate>
            <ul className="profile__info">
              <li className="profile__info-item">
                <label className="profile__info-item-title">Имя</label>
                <input
                  className={
                    !isEditing
                      ? 'profile__info-item-input'
                      : 'profile__info-item-input profile__info-item-input_active'
                  }
                  type="text"
                  placeholder="Имя"
                  minLength="2"
                  maxLength="30"
                  defaultValue="Мария"
                />
              </li>
              <li className="profile__info-item">
                <label className="profile__info-item-title">E-mail</label>
                <input
                  className={
                    !isEditing
                      ? 'profile__info-item-input'
                      : 'profile__info-item-input profile__info-item-input_active'
                  }
                  type="email"
                  placeholder="E-mail"
                  defaultValue="pochta@yandex.ru"
                />
              </li>
            </ul>
          </form>
        </div>
        {!isEditing ? (
          <ul className="profile__links">
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
            <p className="profile__error">При обновлении профиля произошла ошибка.</p>
            <button className="profile__save" onClick={handleSave} type="submit">
              Сохранить
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Profile;
