import React from 'react';
import { useRow } from '../TableRows/RowContext';

import s from './TableCells.module.scss';
const CellStock = ({ title, idx, className }) => {
  const { rowData } = useRow();
  const content = rowData[title?.action] || '---';
  const actionClassName = content !== '---' ? s[title?.action] : s.empty;
  const classNames = [s.coll, actionClassName, className].join(' ');
  return <div className={classNames}>CellStock</div>;
};

export default CellStock;
