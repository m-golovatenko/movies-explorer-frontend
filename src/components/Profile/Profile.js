import React from 'react';
import './Profile.css';
import { useState } from 'react';

function Profile({ setLoggedIn }) {
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
    <section className="profile">
      <div className="profile__data">
        <h2 className="profile__greetings">Привет, Мария!</h2>
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
              defaultValue="pochta@yandex.ru"
            />
          </li>
        </ul>
      </div>
      {!isEditing ? (
        <ul className="profile__links">
          <li>
            <button className="profile__links-item" onClick={handleEdit}>
              Редактировать
            </button>
          </li>
          <li>
            <button onClick={handleLogout} className="profile__links-item profile__links-item_red">
              Выйти из аккаунта
            </button>
          </li>
        </ul>
      ) : (
        <div className="profile__edit">
          <p className="profile__error">При обновлении профиля произошла ошибка.</p>
          <button className="profile__save" onClick={handleSave}>
            Сохранить
          </button>
        </div>
      )}
    </section>
  );
}

export default Profile;
