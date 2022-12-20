import React from 'react';
import { SelectHead } from './SelectHead';
import { useTable } from './TableContext';
import Coll from './Coll';

import s from './TableDinamic.module.scss';

const Row = ({ row = {} }) => {
  const { rows = [], rowGrid, rowOptions, editable } = useTable();

  return (
    <div className={s.tableHRow} style={rowGrid}>
      <SelectHead arr={rowOptions} item={row} editable={editable} />
      {rows.map(row => (
        <Coll key={row.id} className={s.coll} item={row} {...row} editable={editable} />
      ))}
    </div>
  );
};

export default Row;
