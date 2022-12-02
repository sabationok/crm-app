import React, { useState } from 'react';

import s from './PrimaryInput.module.scss';
const PrimarySelect = ({ label, name = 'input', onChange, placeholder = null, ...props }) => {
  const [inputValue, setInputValue] = useState();

  function handleInputChange(ev) {
    const { value } = ev;
    setInputValue(value);
    if (onChange) {
      onChange(ev);
    }
  }
  return (
    <fieldset className={s.inputBox}>
      {label && (
        <legend className={s.legend}>
          <span className={s.legendInner}>{label}</span>
        </legend>
      )}

      <input className={s.input} value={inputValue} placeholder={placeholder ?? label} onChange={handleInputChange} {...props} />
    </fieldset>
  );
};

export default PrimarySelect;