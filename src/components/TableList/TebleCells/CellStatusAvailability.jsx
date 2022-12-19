import React from 'react';
import { useRow } from '../TableRows/RowContext';
import Status from './Status/Status';

import s from './TableCells.module.scss';

const CellStatusAvailability = ({ title, idx, className }) => {
  const { rowData } = useRow();
  const content = rowData[title?.dataTitle] || '---';
  const actionClassName = content !== '---' ? s[title?.action] : s.empty;
  const classNames = [s.coll, actionClassName, className].join(' ');

  return (
    <div className={classNames}>
      <Status status={rowData?.availability} />
    </div>
  );
};

export default CellStatusAvailability;
