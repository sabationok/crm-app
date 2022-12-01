import React, { useState } from 'react';

import s from './PrimaryInput.module.scss';
const PrimaryInput = ({ label, name = 'input', onChange, ...props }) => {
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

      <input className={s.input} value={inputValue} onChange={handleInputChange} {...props} />
    </fieldset>
  );
};

export default PrimaryInput;
