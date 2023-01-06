import React from 'react';

import s from './ListCells.module.scss';

const CellImg = ({ item, dataKey, data }) => {
  return (
    <div className={s.cellImg}>
      <div className={s.imgBox}>
        <img className={s.img} src={data?.imgUrl} alt={data?.name} />
      </div>
    </div>
  );
};

export default CellImg;
