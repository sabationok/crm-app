import React from 'react';

import s from './ListCells.module.scss';

const CellFlex = ({ title = '', name = '', text }) => {
  return (
    <div className={s.cellFlex} title={`${title}: ${text}`}>
      <div className={s.title}>{`${title}:`}</div>
      <div className={s.text}>{text}</div>
    </div>
  );
};

export default CellFlex;
