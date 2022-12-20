import React from 'react';

import s from './TableDinamic.module.scss';
export const SelectHead = ({ item, arr, editable }) => {
  return (
    <div className={s.selectBox}>
      <select name={item.title} id={item.id} className={s.select} disabled={!editable}>
        {arr.map(el => {
          return (
            <option key={el.id} value={el.id} selected={item.title === el.title}>
              {el.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};
