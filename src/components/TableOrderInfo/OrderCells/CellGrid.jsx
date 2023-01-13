import React from 'react';

import s from './ListCells.module.scss';

const CellGrid = ({ name = '', title = '', text }) => {
  return (
    <div className={s.cellGrid} title={`${name}: ${text}`}>
      <div className={s.title}>
        <span>{`${name}:`}</span>
      </div>
      <div className={s.text}>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default CellGrid;
