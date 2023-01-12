import React from 'react';

import s from './RowCells.module.scss';

const CellIndex = ({ item, dataKey, data, idx = 0 }) => {
  console.log(data);
  return (
    <div className={[s.cell, s[dataKey]].join(' ')}>
      <span className={s.inner}>{idx + 1}</span>
    </div>
  );
};
export default CellIndex;
