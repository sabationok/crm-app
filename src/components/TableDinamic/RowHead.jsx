import React from 'react';
import { SelectHead } from './SelectHead';
import { useTable } from './TableContext';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import s from './TableDinamic.module.scss';

const RowHead = () => {
  const { collumns = [], rowGrid, collOptions, disabled, handleAddCollumn } = useTable();

  const disablePlusBtn = collumns.length >= collOptions.length;
  return (
    <div className={s.tableHRow} style={rowGrid}>
      <div className={s.stickyInRow}>
        <div className={[s.coll, s.tableCorner].join(' ')}>Параметри</div>
      </div>

      {collumns.map(coll => (
        <SelectHead key={coll.id} className={s.select} item={coll} arr={collOptions} disabled={disabled} />
      ))}

      {!disabled && (
        <div className={s.tableCorner}>
          <ButtonIcon iconId="plus" className={s.plusBtn} disabled={disablePlusBtn} onClick={handleAddCollumn}>
            Додати
          </ButtonIcon>
        </div>
      )}
    </div>
  );
};

export default RowHead;
