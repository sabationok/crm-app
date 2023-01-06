import React from 'react';
import CellImg from '../OrderCells/CellImg';
import CellFlex from '../OrderCells/CellFlex';
import ComplectTable from '../ComplectTable/ComplectTable';

import s from './OrderListItem.module.scss';
// const countRowData = data => {
//   let newData = { ...data };

//   if (data?.price && data?.quantity) {
//     newData.summ = data.price * data.quantity;
//   }

//   if (data?.sale && newData?.summ) {
//     newData.saleSumm = (newData.summ * (100 - data.sale)) / 100;
//   }

//   return newData;
// };
const OrderListItem = ({ data }) => {
  return (
    <li className={s.OrderListItem}>
      <div className={s.top}>
        <CellFlex {...{ title: 'Назва', text: data?.name || 'name' }} />

        <CellFlex {...{ title: 'SKU', text: data?.sku || '0000000000' }} />

        <CellFlex {...{ title: 'Ціна', text: data?.total || 0 }} />
      </div>

      <div className={s.middle}>
        <CellImg {...{ data }} />

        <ComplectTable data={data?.complect} />
      </div>

      <div className={s.bottom}>
        <CellFlex {...{ title: 'ТТН', text: data?.ttn || '0000000000' }} />

        <CellFlex {...{ title: 'Вартість доставки', text: data?.ttnCost || 0 }} />
      </div>
    </li>
  );
};

export default OrderListItem;
