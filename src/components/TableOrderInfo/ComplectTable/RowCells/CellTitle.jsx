import React from 'react';

import s from './RowCells.module.scss';

const CellTitle = ({ title, dataKey }) => {
  return <div className={[s.cell, s.title, s[dataKey]].join(' ')}>{title}</div>;
};

export default CellTitle;
