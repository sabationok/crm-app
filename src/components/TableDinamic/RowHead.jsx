import React from 'react';
import { SelectHead } from './SelectHead';
import { useTable } from './TableContext';
import s from './TableDinamic.module.scss';

const RowHead = () => {
  const { collumns = [], rowGrid, collOptions, editable } = useTable();

  return (
    <div className={s.tableHRow} style={rowGrid}>
      <div className={s.coll}>Параметри</div>
      {collumns.map(coll => (
        <SelectHead key={coll.id} className={s.select} {...coll} item={coll} arr={collOptions} editable={editable} />
      ))}
    </div>
  );
};

export default RowHead;
