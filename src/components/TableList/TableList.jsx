import React from 'react';

import TableContext from './TableContext';
import { useBlock } from 'components/Block/BlockContext';

import TableHead from './TableHead';
import TableBody from './TableBody';

import s from './TableList.module.scss';

const TableList = props => {
  const block = useBlock();
  return (
    <TableContext
      value={{
        ...props,
      }}
    >
      <div className={[s.table, s.orders]} ref={block.printRef}>
        <TableHead />
        <TableBody />
      </div>
    </TableContext>
  );
};

export default TableList;
