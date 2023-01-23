import React from 'react';
import CellImg from '../../TableInfoComponents/Cells/CellImg';
import CellFlex from '../../TableInfoComponents/Cells/CellFlex';
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
  const countedTotal = data?.sale ? data?.total - data?.sale : data?.total;
  return (
    <li className={s.OrderListItem}>
      <div className={s.top}>
        <CellFlex {...{ title: 'Назва', text: data?.name || 'name' }} />

        <CellFlex {...{ title: 'SKU', text: data?.sku || '00000000' }} />

        <CellFlex {...{ title: 'К-ть', text: data?.quantity || 0 }} />

        <CellFlex {...{ title: 'Ціна', text: data?.price || 0 }} />

        <CellFlex
          {...{ title: 'Знижка', text: data?.sale ? `${(data?.total * data?.sale) / 100} (${data?.sale} %)` : `${0} (${data?.sale || 0}%)` }}
        />

        <CellFlex {...{ title: 'Сума', text: countedTotal || 0 }} />
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
