import React from 'react';
import { useRow } from '../TableRows/RowContext';

import s from './TableCells.module.scss';
const CellCategory = ({ title, idx, className }) => {
  const { rowData } = useRow();
  const content = rowData[title?.action] || '---';
  const actionClassName = content !== '---' ? s[title?.action] : s.empty;
  const classNames = [s.coll, actionClassName, className].join(' ');
  return <div className={classNames}>CellCategory</div>;
};

export default CellCategory;
