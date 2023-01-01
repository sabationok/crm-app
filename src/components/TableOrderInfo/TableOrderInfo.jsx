import React from 'react';
import { useSelector } from 'react-redux';
import { getPageObjData } from 'redux/selectors';
import BlockEmpty from 'components/Blocks/BlockEmpty/BlockEmpty';

import s from './TableOrderInfo.module.scss';

const TableOrderInfo = () => {
  const order = useSelector(getPageObjData);

  console.log(order);
  return (
    <>
      {<BlockEmpty title={order?._id} />}
      <div className={s.table}></div>
    </>
  );
};

export default TableOrderInfo;
