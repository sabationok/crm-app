import React from 'react';
import AccordeonItem from './AccordeonItem/AccordeonItem';

import OrderContentList from './OrderContentList/OrderContentList';
import OrderMainInfo from './OrderTopInfo/OrderMainInfo';
import OrderPaymentInfo from './OrderTopInfo/OrderPaymentInfo';
import OrderPersonInfo from './OrderTopInfo/OrderPersonInfo';
import OrderShipmentInfo from './OrderTopInfo/OrderShipmentInfo';

import s from './OrderInfo.module.scss';

const OrderInfo = () => {
  return (
    <>
      <div className={s.OrderInfo}>
        <AccordeonItem {...{ title: 'Загальна інформація' }}>
          <OrderMainInfo />
        </AccordeonItem>

        <AccordeonItem {...{ title: 'Інформація про замовника' }}>
          <OrderPersonInfo />
        </AccordeonItem>

        <AccordeonItem {...{ title: 'Інформація про отримувача' }}>
          <OrderPersonInfo />
        </AccordeonItem>

        <AccordeonItem {...{ title: 'Інформація про оплату' }}>
          <OrderPaymentInfo />
        </AccordeonItem>

        <AccordeonItem {...{ title: 'Інформація про відвантаження' }}>
          <OrderShipmentInfo />
        </AccordeonItem>

        <AccordeonItem {...{ title: 'Вміст' }}>
          <OrderContentList />
        </AccordeonItem>
      </div>
    </>
  );
};

export default OrderInfo;
