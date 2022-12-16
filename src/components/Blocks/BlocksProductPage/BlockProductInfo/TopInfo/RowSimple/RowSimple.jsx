import React from 'react';

import s from './RowSimple.module.scss';

const RowSimple = ({ title, data }) => {
  return (
    <div className={s.row}>
      <div className={s.col} title={title}>
        {title}
      </div>
      <div className={s.col}>{data}</div>
    </div>
  );
};

export default RowSimple;
