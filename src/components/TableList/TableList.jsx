import React from 'react';

import TableContext from './TableContext';
import TableHead from './TableHead';
import TableBody from './TableBody';
import AppLoader from 'components/AppLoader/AppLoader';
import { useBlock } from 'components/Block/BlockContext';

import s from './TableList.module.scss';

const TableList = ({ rowActions = true, tableTitles = [], tableData = [], prepeareRowData, isLoading = false, ...props }) => {
  const block = useBlock();

  const ctx = {
    rowActions,
    tableTitles,
    tableData,
    prepeareRowData,
    isLoading,
    ...props,
  };

  return (
    <TableContext value={ctx}>
      <>
        <AppLoader isLoading={isLoading} />

        <div className={[s.table]} ref={block.printRef}>
          <TableHead />

          {tableData.length > 0 && <TableBody />}
        </div>
      </>
    </TableContext>
  );
};

export default TableList;
