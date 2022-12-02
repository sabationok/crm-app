import React, { useState } from 'react';

import s from './PrimaryInput.module.scss';
const PrimaryInput = ({ label = 'input', onChange, value, disabled = false, placeholder = null, ...props }) => {
  const [inputValue, setInputValue] = useState(value);

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

      <input className={s.input} value={inputValue} placeholder={placeholder ?? label} onChange={handleInputChange} {...props} />
    </fieldset>
  );
};

export default PrimaryInput;
