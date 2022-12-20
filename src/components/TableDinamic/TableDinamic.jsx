import React, { useState } from 'react';
import TableContext from './TableContext';
import RowHead from './RowHead';
import { nanoid } from 'nanoid';
// import cloneDeep from 'lodash.clonedeep';

import { useBlock } from 'components/Block/BlockContext';
import s from './TableDinamic.module.scss';
import Row from './Row';

const TableDinamic = props => {
  const {
    stockData,
    stockData: { collumns = [], rows = [] },
  } = useBlock();
  const [tableRows, setTableRows] = useState(rows);
  const [tableCollumns, setTableCollumns] = useState(collumns);

  const rowGrid = {
    gridTemplateColumns: ` minmax(150px,1fr) ${tableCollumns.map(el => el.width).join(' ')} ${props.disabled ? '' : 'minmax(100px,1fr)'}`,
  };

  function handleAddRow() {
    setTableRows([...tableRows, { ...stockData.emptyRow, title: 'Оберіть', id: nanoid(5) }]);
    console.log(tableRows);
  }
  function handleAddCollumn() {
    setTableCollumns([...tableCollumns, { ...stockData.emptyCollumn, id: nanoid(5) }]);
  }

  return (
    <TableContext value={{ ...props, rowGrid, s, ...stockData, rows: tableRows, collumns: tableCollumns, handleAddRow, handleAddCollumn }}>
      <div className={s.tableBox}>
        <div className={s.table}>
          <div className={s.tHead}>
            <RowHead />
          </div>

          <div className={s.tBody}>
            {tableRows.map(row => (
              <Row key={row.id} row={row} />
            ))}
          </div>

          {!props.disabled && <Row plusBtn />}
        </div>
      </div>
    </TableContext>
  );
};

export default TableDinamic;
