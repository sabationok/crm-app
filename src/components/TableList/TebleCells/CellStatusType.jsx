import React from 'react';
import { useRow } from '../TableRows/RowContext';
import Status from './Status/Status';

import s from './TableCells.module.scss';
const CellStatusType = ({ title, idx, className }) => {
  const { rowData } = useRow();
  const content = rowData[title?.action] || '---';
  const actionClassName = content !== '---' ? s[title?.action] : s.empty;
  const classNames = [s.coll, actionClassName, className].join(' ');

  return (
    <div className={classNames}>
      <Status status={rowData?.isCommission ? 'isCommission' : 'isStandart'} />
    </div>
  );
};

export default CellStatusType;
