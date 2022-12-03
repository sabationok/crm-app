import React, { useEffect, useState } from 'react';

import s from './PrimaryInput.module.scss';
const PrimaryInput = ({ label = 'input',  disabled = false, placeholder = null, ...props }) => {
  return (
    <fieldset className={s.inputBox} disabled={disabled}>
      {label && (
        <legend className={s.legend}>
          <span className={s.legendInner}>{label}</span>
        </legend>
      )}

      <input className={s.input} placeholder={placeholder ?? label} {...props} />
    </fieldset>
  );
};

export default PrimaryInput;
