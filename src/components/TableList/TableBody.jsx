import React from 'react';
import { useTable } from './TableContext';
import RowContext from './TableRows/RowContext';
import TableRow from './TableRows/TableRow';
import s from './TableList.module.scss';
const TableBody = () => {
  const { visiblePosts = [] } = useTable();
  return (
    <div className={s.tBody}>
      <TableRow key={1} rowData={{}} idx={1} />

      {visiblePosts.map((rowData, idx) => (
        <TableRow key={rowData.id} rowData={rowData} idx={idx} />
      ))}
    </div>
  );
};

export default TableBody;
