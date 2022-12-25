import React from 'react';
import { useBlock } from 'components/Block/BlockContext';

import s from './TableOrderInfo.module.scss';

const TableOrderInfo = () => {
  const { order = {} } = useBlock();
  console.log(order, 'TableOrderInfo');

  return <div className={s.table}>{order?._id}</div>;
};

export default TableOrderInfo;
