import React from 'react';
import { SelectHead } from './SelectHead';
import { useTable } from './TableContext';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import Coll from './Coll';

import s from './TableDinamic.module.scss';

const Row = ({ row = {}, plusBtn = false }) => {
  const { rows = [], rowGrid, rowOptions, collumns, disabled, handleAddRow } = useTable();

  return (
    <div className={s.row} style={rowGrid}>
      {plusBtn && (
        <ButtonIcon className={s.plusBtn} iconId="plus" onClick={handleAddRow}>
          Рядок
        </ButtonIcon>
      )}

      {!plusBtn && <SelectHead arr={rowOptions} item={row} disabled={disabled} />}

      {collumns.map((coll, idx) => (
        <Coll key={coll.id} className={s.coll} item={rows[idx]} disabled={disabled} />
      ))}

      {!disabled && <Coll className={s.coll} disabled />}
    </div>
  );
};

export default Row;
