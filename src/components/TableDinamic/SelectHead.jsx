import React from 'react';

import s from './TableDinamic.module.scss';
export const SelectHead = ({ item, arr, ...props }) => {
  return (
    <div className={s.selectBox}>
      <select name={item.title} id={item.id} className={s.select} {...props} defaultValue={item.id ?? 'DEFAULT'}>
        <option value="DEFAULT" disabled>
          Оберіть
        </option>
        {arr.map(el => {
          return (
            <option key={el.id} value={el.id}>
              {el.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};
// selected={item.title === el.title}
