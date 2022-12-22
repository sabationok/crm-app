import React from 'react';
import { useTable } from './TableContext';

import TableRow from './TableRows/TableRow';

import s from './TableList.module.scss';

const TableBody = () => {
  const { tableData, prepareRowData } = useTable();
  return (
    <div className={s.tBody}>
      {tableData.map((rowData, idx) => (
        <TableRow key={rowData._id} rowData={prepareRowData ? prepareRowData(rowData) : rowData} idx={idx} />
      ))}
    </div>
  );
};

export default TableBody;
