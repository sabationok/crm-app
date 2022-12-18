import React from 'react';
import { useRow } from '../TableRows/RowContext';
import ApprovedStatus from './ApprovedStatus/ApprovedStatus';

import s from './TableCells.module.scss';
const CellStatusApprove = ({ title, idx, className }) => {
  const { rowData } = useRow();
  const content = rowData[title?.action] || '---';
  const actionClassName = content !== '---' ? s[title?.action] : s.empty;
  const classNames = [s.coll, actionClassName, className].join(' ');

  return (
    <div className={classNames}>
      <ApprovedStatus status={rowData?.ApprovedStatus} />
    </div>
  );
};

export default CellStatusApprove;

// approvedStatus
// visibilityStatus
// stock
// category
// string
// number
