import React from 'react';

import TableRow from './TableRow/TableRow';
import CellTitle from './RowCells/CellTitle';

import s from './ComplectTable.module.scss';

const ComplectTable = ({ data = [] }) => {
  const titlesArr = [
    { title: 'SKU', dataKey: 'sku', action: 'Text' },
    { title: 'Кількість', dataKey: 'quantity', action: 'Qty' },
    { title: 'Ціна', dataKey: 'price', action: 'Number' },
    { title: 'Знижка, %', dataKey: 'sale', action: 'Number' },
    { title: 'Сума', dataKey: 'summ', action: 'Summ' },
    { title: 'Сума зі знижкою', dataKey: 'saleSumm', action: 'SaleSumm' },
  ];

  return (
    <div className={s.complectTable}>
      <div className={s.complectTableHead}>
        {titlesArr.map(({ title, dataKey }) => (
          <CellTitle key={dataKey} {...{ title, dataKey }} />
        ))}
      </div>

      <div className={s.complectTableBody}>
        {data.length === 0 && <TableRow {...{ titlesArr }} />}
        {data.length > 0 && data.map(el => <TableRow key={el?.sku} {...{ rowData: el, titlesArr }} />)}
      </div>
    </div>
  );
};

export default ComplectTable;
