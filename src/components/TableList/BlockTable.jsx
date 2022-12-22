import React from 'react';

import TableContext from './TableContext';

import TableHead from './TableHead';
import TableBody from './TableBody';

import s from './TableList.module.scss';

const TableList = props => {
  return (
    <TableContext
      value={{
        ...props,
      }}
    >
      <div className={[s.table, s.orders]}>
        <TableHead />
        <TableBody />
      </div>
    </TableContext>
  );
};

export default TableList;
