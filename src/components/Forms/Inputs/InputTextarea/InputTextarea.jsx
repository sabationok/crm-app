import React, { useState } from 'react';

import s from './InputTextarea.module.scss';
const InputTextarea = ({ label = 'input', onChange, disabled = false, placeholder = null, type, ...props }) => {
  const [inputValue, setInputValue] = useState();

  function handleInputChange(ev) {
    const { value } = ev;
    setInputValue(value);
    if (onChange) {
      onChange(ev);
    }
  }

  return (
    <fieldset className={s.inputBox} disabled={disabled}>
      {label && (
        <legend className={s.legend}>
          <span className={s.legendInner}>{label}</span>
        </legend>
      )}
      <textarea className={s.input} value={inputValue} placeholder={placeholder ?? label} onChange={handleInputChange} {...props}></textarea>
    </fieldset>
  );
};

export default InputTextarea;
