import React from 'react';
import { useRow } from '../TableRows/RowContext';
import VisibilityStatus from './VisibilityStatus/VisibilityStatus';

import s from './TableCells.module.scss';
const CellStatusVisibility = ({ title, idx, className }) => {
  const { rowData } = useRow();
  const content = rowData[title?.action] || '---';
  const actionClassName = content !== '---' ? s[title?.action] : s.empty;
  const classNames = [s.coll, actionClassName, className].join(' ');

  return (
    <div className={classNames}>
      <VisibilityStatus status={rowData?.isVisible} />
    </div>
  );
};

export default CellStatusVisibility;
