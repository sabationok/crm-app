import React from 'react';
import { SelectHead } from './SelectHead';
import { useTable } from './TableContext';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import Coll from './Coll';

import s from './TableDinamic.module.scss';

const Row = ({ row = {}, plusBtn = false }) => {
  const { rows = [], rowGrid, rowOptions, collumns, disabled, handleAddRow } = useTable();

  const disablePlusBtn = rows.length >= rowOptions.length;

  return (
    <div className={s.row} style={rowGrid}>
      {plusBtn && (
        <ButtonIcon className={s.plusBtn} iconId="plus" disabled={disablePlusBtn} onClick={handleAddRow}>
          Рядок
        </ButtonIcon>
      )}
      <div className={s.stickyInRow}>{!plusBtn && <SelectHead arr={rowOptions} item={row} disabled={disabled} />}</div>

      {collumns.map((coll, idx) => (
        <React.Fragment key={coll.id}>
          {!plusBtn ? <Coll className={s.coll} item={rows[idx]} disabled={disabled} /> : <Coll className={s.coll} disabled />}
        </React.Fragment>
      ))}

      {!disabled && <Coll className={s.coll} disabled />}
    </div>
  );
};

export default Row;
