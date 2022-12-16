import React from 'react';

import s from './Fieldset.module.scss';
const Fieldset = ({ legend = '', disabled, children, className = '' }) => {
  return (
    <fieldset className={[s.fieldset, className].join(' ')} disabled={disabled}>
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
