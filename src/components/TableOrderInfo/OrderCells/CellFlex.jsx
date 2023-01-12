import React from 'react';

import s from './ListCells.module.scss';

const CellFlex = ({ title = '', text }) => {
  return (
    <div className={s.cellFlex} title={`${title}: ${text}`}>
      <div className={s.title}>
        <span>{title}</span>
      </div>
      <div className={s.text}>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default CellFlex;
