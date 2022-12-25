import React, { useMemo, useState } from 'react';

// import { nanoid } from 'nanoid';
import { useTable } from './TableContext';

import TableRow from './TableRows/TableRow';

import s from './TableList.module.scss';
import { nanoid } from 'nanoid';

const TableBody = () => {
  const { tableData, prepeareRowData } = useTable();
  const [data, setData] = useState([]);

  useMemo(() => {
    let newData = [...tableData, ...tableData, ...tableData, ...tableData].map(el => {
      return { ...el, _id: nanoid(8) };
    });
    setData(newData);
  }, [tableData]);

  return (
    <div className={s.tBody}>
      {data.map((rowData, idx) => {
        return <TableRow key={rowData._id} rowData={prepeareRowData ? prepeareRowData(rowData) : rowData} idx={idx} />;
      })}
    </div>
  );
};

export default TableBody;
