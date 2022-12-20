import React from 'react';

import s from './TableDinamic.module.scss';

const Coll = ({ value, className, editable }) => {
  return (
    <div className={className}>
      <input className={s.collInput} type="text" disabled={!editable} />
    </div>
  );
};

export default Coll;
