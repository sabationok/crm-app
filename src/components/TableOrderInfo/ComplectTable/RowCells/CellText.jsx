import React from 'react';

import s from './RowCells.module.scss';

const CellText = ({ item, dataKey, data, idx }) => {
  const text = data[item?.dataKey] ?? '---';
  return (
    <div className={[s.cell, s[dataKey]].join(' ')}>
      <span className={s.inner} title={text}>
        {text}
      </span>
    </div>
  );
};
export default CellText;
