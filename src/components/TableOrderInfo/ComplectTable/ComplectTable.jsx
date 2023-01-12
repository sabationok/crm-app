import React from 'react';

import TableRow from './TableRow/TableRow';
import CellTitle from './RowCells/CellTitle';

import s from './ComplectTable.module.scss';

const ComplectTable = ({ data = [] }) => {
  const titlesArr = [
    { title: '№ п/п', dataKey: 'index', action: 'Index' },
    { title: 'Атрибут 1', dataKey: 'atribute_1', action: 'Atribute' },
    { title: 'Атрибут 2', dataKey: 'atribute_2', action: 'Atribute' },
    { title: 'Кількість', dataKey: 'quantity', action: 'Qty' },
    { title: 'Ціна', dataKey: 'price', action: 'Number' },
    { title: 'Сума', dataKey: 'summ', action: 'Summ' },
    // { title: 'SKU', dataKey: 'sku', action: 'Text' },
    // { title: 'Знижка, %', dataKey: 'sale', action: 'Number' },
    // { title: 'Сума зі знижкою', dataKey: 'saleSumm', action: 'SaleSumm' },
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

        {data.length > 0 && (
          <>
            {data.map((el, idx) => (
              <TableRow key={idx} {...{ rowData: el, titlesArr, idx }} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ComplectTable;
