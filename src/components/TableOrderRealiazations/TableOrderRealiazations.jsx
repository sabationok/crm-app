import React from 'react';
import { useBlock } from 'components/Block/BlockContext';

import s from './TableOrderRealiazations.module.scss';

const TableOrderRealiazations = () => {
  const { order = {} } = useBlock();

  return (
    <div className={s.table}>
      <div></div>
      <div>{order?._id}</div>
    </div>
  );
};

export default TableOrderRealiazations;
