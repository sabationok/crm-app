import React from 'react';
// import { nanoid } from 'nanoid';
import { useTable } from './TableContext';

import TableRow from './TableRows/TableRow';

import s from './TableList.module.scss';
import { nanoid } from 'nanoid';

const TableBody = () => {
  const { tableData, prepeareRowData } = useTable();

  const newData = [...tableData, ...tableData, ...tableData, ...tableData].map(el => {
    return { ...el, _id: nanoid(16) };
  });

  return (
    <div className={s.tBody}>
      {newData.map((rowData, idx) => {
        return <TableRow key={rowData._id} rowData={prepeareRowData ? prepeareRowData(rowData) : rowData} idx={idx} />;
      })}
    </div>
  );
};

export default TableBody;
