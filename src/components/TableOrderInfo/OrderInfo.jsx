import React from 'react';
import AccordeonItem from './AccordeonItem/AccordeonItem';

import OrderContentList from './OrderContentList/OrderContentList';
import OrderTopInfo from './OrderTopInfo/OrderTopInfo';

import s from './OrderInfo.module.scss';

const OrderInfo = () => {
  return (
    <>
      <div className={s.OrderInfo}>
        <AccordeonItem {...{ title: 'Загальна інформація' }}>
          <OrderTopInfo />
        </AccordeonItem>

        <AccordeonItem {...{ title: 'Вміст' }}>
          <OrderContentList />
        </AccordeonItem>
      </div>
    </>
  );
};

export default OrderInfo;
