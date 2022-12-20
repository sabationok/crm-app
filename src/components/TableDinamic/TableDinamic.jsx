import React from 'react';
import TableContext from './TableContext';
import RowHead from './RowHead';
// import cloneDeep from 'lodash.clonedeep';

import { rowOptions, collOptions, collumns, rows } from './testData';
import { useBlock } from 'components/Block/BlockContext';
import s from './TableDinamic.module.scss';
import Row from './Row';

const TableDinamic = props => {
  const { tableTitles = [] } = useBlock();

  const rowGrid = {
    display: 'grid',
    gridTemplateColumns: ` minmax(100px,1fr) ${collumns.map(el => el.width).join(' ')}`,
  };
  return (
    <TableContext value={{ ...props, rowGrid, tableTitles, s, collumns, rows, rowOptions, collOptions }}>
      <div className={s.tableBox}>
        <div className={s.table}>
          <RowHead />
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
