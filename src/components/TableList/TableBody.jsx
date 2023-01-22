import React from 'react';
import TableRow from './TableRows/TableRow';
import { useTable } from './TableContext';

import s from './TableList.module.scss';

const TableBody = () => {
  const { tableData, prepeareRowData } = useTable();

  return (
    <div className={s.tBody}>
      {tableData.map((rowData, idx) => {
        return <TableRow key={rowData._id} rowData={prepeareRowData ? prepeareRowData(rowData) : rowData} idx={idx} />;
      })}
    </div>
  );
};

export default TableBody;
