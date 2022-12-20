import React from 'react';
import { useRow } from '../TableRows/RowContext';
import DateInfo from './Date/DateInfo';

import s from './TableCells.module.scss';

const CellDate = ({ title, className }) => {
  const { rowData } = useRow();

  const content = rowData[title?.dataTitle];
  const actionClassName = content ? s[title?.action] : s.empty;
  const classNames = [s.coll, s.collDate, actionClassName, className].join(' ');

  return (
    <div className={classNames}>
      <DateInfo dateInfo={rowData?.createdAt} />

      <DateInfo dateInfo={rowData?.updatedAt} />
    </div>
  );
};

export default CellDate;
