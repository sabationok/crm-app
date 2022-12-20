import React from 'react';
import TableContext from './TableContext';
import RowHead from './RowHead';
// import cloneDeep from 'lodash.clonedeep';

import { useBlock } from 'components/Block/BlockContext';
import s from './TableDinamic.module.scss';
import Row from './Row';

const TableDinamic = props => {
  const {
    stockData,
    stockData: { rows = [], collumns = [] },
  } = useBlock();

  const rowGrid = {
    display: 'grid',
    gridTemplateColumns: ` minmax(100px,1fr) ${collumns.map(el => el.width).join(' ')}`,
    gridTemplateRows: '36px',
  };

  return (
    <TableContext value={{ ...props, rowGrid, s, ...stockData }}>
      <div className={s.tableBox}>
        <div className={s.table}>
          <div className={s.tHead}>
            <RowHead />
          </div>

          <div className={s.tBody}>
            {rows.map(row => (
              <Row key={row.id} row={row} />
            ))}
          </div>
        </div>
      </div>
    </TableContext>
  );
};

export default TableDinamic;
