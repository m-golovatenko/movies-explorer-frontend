import React from 'react';
import { useState } from 'react';
import './InputElement.css';

function InputElement(props) {
  // eslint-disable-next-line
  const [isValid, setIsValid] = useState(true);

  return (
    <li className="auth__form-list-item">
      <label className="auth__label">{props.labelText}</label>
      <input
        id="auth__input-name"
        className="auth__input auth__input_type_name"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        minLength={props.minLength}
        maxLength={props.maxLength}
        required
        autoComplete={props.autoComplete}
      />

      <span
        className={isValid ? 'auth__input-error' : 'auth__input-error auth__input-error_active'}
      >
        Что-то пошло не так...
      </span>
    </li>
  );
}

export default InputElement;
