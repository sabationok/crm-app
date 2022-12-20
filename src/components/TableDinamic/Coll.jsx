import React from 'react';

import s from './TableDinamic.module.scss';

const Coll = ({ value, className, ...props }) => {
  // let regex = /^00-00$/i;
  return (
    <div className={className}>
      <input className={s.collInput} type="number" min="0" placeholder="0" {...props} />
    </div>
  );
};

export default Coll;
