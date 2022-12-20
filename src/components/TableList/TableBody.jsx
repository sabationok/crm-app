import React from 'react';
import { useTable } from './TableContext';
import { productsArrTest } from 'data/productsFormData';
import { prepareRowData } from 'data/productsFormData';

import TableRow from './TableRows/TableRow';
import s from './TableList.module.scss';
const TableBody = () => {
  const { visiblePosts = [] } = useTable();

  return (
    <div className={s.tBody}>
      {visiblePosts.map((rowData, idx) => (
        <TableRow key={rowData._id} rowData={prepareRowData(rowData)} idx={idx} />
      ))}
      {productsArrTest.map((rowData, idx) => (
        <TableRow key={rowData._id} rowData={prepareRowData(rowData)} idx={idx} />
      ))}
    </div>
  );
};

export default TableBody;
