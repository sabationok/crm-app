import React from 'react';

import OrderContentList from './OrderContentList/OrderContentList';
import OrderTopInfo from './OrderTopInfo/OrderTopInfo';

import s from './OrderInfo.module.scss';

const OrderInfo = () => {
  return (
    <>
      <div className={s.OrderInfo}>
        <OrderTopInfo />

        <OrderContentList />
      </div>
    </>
  );
};

export default OrderInfo;
