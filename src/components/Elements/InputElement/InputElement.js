import React from 'react';
import './InputElement.css';
import { useFormWithValidation } from '../../../hooks/useValidation';

function InputElement(props) {
  const { isValid } = useFormWithValidation();

  return (
    <li className="auth__form-list-item">
      <label className="auth__label">{props.labelText}</label>
      <input
        id={props.inputId}
        className="auth__input auth__input_type_name"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        minLength={props.minLength}
        maxLength={props.maxLength}
        required
        autoComplete={props.autoComplete}
        value={props.value}
        onChange={props.handleChange}
        pattern={props.pattern}
      />

      <span
        className={isValid ? 'auth__input-error' : 'auth__input-error auth__input-error_active'}
      >
        {props.errorText}
      </span>
    </li>
  );
}

export default InputElement;
