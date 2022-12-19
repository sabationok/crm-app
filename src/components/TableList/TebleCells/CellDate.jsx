import React from 'react';
import { useRow } from '../TableRows/RowContext';

import s from './TableCells.module.scss';

const CellDate = ({ title, dateString, className }) => {
  const { rowData } = useRow();

  let date, year, month, day, hours, minutes, seconds;

  const content = rowData[title?.dataTitle];
  const actionClassName = content ? s[title?.action] : s.empty;
  const classNames = [s.coll, s.collDate, actionClassName, className].join(' ');

  if (content) {
    date = new Date(content);
  }
  if (!content) {
    date = new Date();
  }
  year = date.getFullYear().toString().padStart(2, 0);
  month = (date.getMonth() + 1).toString().padStart(2, 0);
  day = date.getDate().toString().padStart(2, 0);
  hours = date.getHours().toString().padStart(2, 0);
  minutes = date.getMinutes().toString().padStart(2, 0);
  seconds = date.getSeconds().toString().padStart(2, 0);

  return (
    <div className={classNames} title={`${day}.${month}.${year} (${hours}:${minutes}:${seconds})`}>
      <span>{content ? `${day}.${month}.${year}` : `00.00.0000`}</span>
      {/* <span>{content ? `(${hours}:${minutes}:${seconds})` : `(00:00:00)`}</span> */}
    </div>
  );
};

export default CellDate;
