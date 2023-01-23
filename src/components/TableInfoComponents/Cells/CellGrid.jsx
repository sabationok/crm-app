import React from 'react';

import s from './ListCells.module.scss';

const CellGrid = ({ name = '', title = '', text }) => {
  return (
    <div className={s.cellGrid} title={`${name}: ${text}`}>
      <div className={s.title}>{`${name}:`}</div>
      <div className={s.text}>{text}</div>
    </div>
  );
};

export default CellGrid;
