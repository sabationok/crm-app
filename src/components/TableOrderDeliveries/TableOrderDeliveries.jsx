import React from 'react';
import { useBlock } from 'components/Block/BlockContext';

import s from './TableOrderDeliveries.module.scss';

const TableOrderDeliveries = () => {
  const { order = {} } = useBlock();

  console.log(order?.deliveries);
  return (
    <div className={s.table}>
      <div>{order?._id}</div>
      <div>
        <div>
          <div></div>

          <div></div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default TableOrderDeliveries;
