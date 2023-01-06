import React from 'react';

import s from './RowCells.module.scss';

const CellNumber = ({ item, dataKey, data, idx }) => {
  const content = data[item?.dataKey] ?? 0;
  return (
    <div className={[s.cell, s[dataKey]].join(' ')}>
      <span className={s.inner} title={content}>
        {content}
      </span>
    </div>
  );
};
export default CellNumber;
