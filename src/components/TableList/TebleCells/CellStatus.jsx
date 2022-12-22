import React from 'react';
import { useRow } from '../TableRows/RowContext';
import Status from './Status/Status';

import s from './TableCells.module.scss';
const CellStatus = ({ title, idx, className }) => {
  const { rowData } = useRow();
  const content = rowData[title?.action] || '---';
  const actionClassName = content !== '---' ? s[title?.action] : s.empty;
  const classNames = [s.coll, actionClassName, className].join(' ');
  // console.log(rowData?.orderStatus);
  return (
    <div className={classNames}>
      <Status status={rowData[title?.dataTitle]} />
    </div>
  );
};

export default CellStatus;
