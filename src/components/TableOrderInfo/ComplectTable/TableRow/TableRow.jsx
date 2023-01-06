import React from 'react';
import CellText from '../RowCells/CellText';
import CellSumm from '../RowCells/CellSumm';
import CellNumber from '../RowCells/CellNumber';
import CellSaleSumm from '../RowCells/CellSaleSumm';

import s from './TableRow.module.scss';

const TableRow = ({ rowData = {}, titlesArr = [] }) => {
  const Components = {
    Text: CellText,
    Qty: CellNumber,
    Number: CellNumber,
    Summ: CellSumm,
    SaleSumm: CellSaleSumm,
  };
  return (
    <div className={s.tableRow}>
      {titlesArr.map(item => {
        let Component = Components.Text;
        if (Components[item.action]) {
          Component = Components[item.action];
          return <Component key={item.dataKey} {...{ item, data: rowData, dataKey: item.dataKey }} />;
        }
        Component = Components.Text;
        return <Component key={item.dataKey} {...{ item, data: rowData, dataKey: item.dataKey }} />;
      })}
    </div>
  );
};

export default TableRow;
