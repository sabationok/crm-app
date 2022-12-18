import React from 'react';
// import { useRow } from '../TableRows/RowContext';

import s from './TableCells.module.scss';
const CellCheckBoxHead = ({ title, idx, className, onChange }) => {
  const classNames = [s.title, s.checkboxCollHead, className].join(' ');
  return (
    <div className={classNames}>
      <input className={s.checkbox} type="checkbox" onChange={onChange} />
    </div>
  );
};

export default CellCheckBoxHead;
