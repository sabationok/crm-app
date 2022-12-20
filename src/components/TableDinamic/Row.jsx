import React from 'react';
import { SelectHead } from './SelectHead';
import { useTable } from './TableContext';
import Coll from './Coll';

import s from './TableDinamic.module.scss';

const Row = ({ row = {} }) => {
  const { rows = [], rowGrid, rowOptions, disabled } = useTable();

  return (
    <div className={s.tableHRow} style={rowGrid}>
      <SelectHead arr={rowOptions} item={row} disabled={disabled} />
      {rows.map(row => (
        <Coll key={row.id} className={s.coll} item={row} disabled={disabled} />
      ))}
    </div>
  );
};

export default Row;
