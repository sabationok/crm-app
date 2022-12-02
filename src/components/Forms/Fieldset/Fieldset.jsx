import React from 'react';

import s from './Fieldset.module.scss';
const Fieldset = ({ legend = '', disabled, children }) => {
  return (
    <fieldset className={s.fieldset} disabled={disabled}>
      {legend && (
        <legend className={s.legend}>
          <span className={s.legendInner}>{legend}</span>
        </legend>
      )}
      {children}
    </fieldset>
  );
};

export default Fieldset;
