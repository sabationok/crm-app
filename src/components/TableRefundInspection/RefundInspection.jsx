import React from 'react';
import AccordeonItem from 'components/TableInfoComponents/AccordeonItem/AccordeonItem';
import CellGrid from 'components/TableInfoComponents/Cells/CellGrid';
import FormRefundInspection from 'components/Forms/FormRefundInspection/FormRefundInspection';
import TableRefundRequest from 'components/TableRefundRequest/TableRefundRequest';
import { imgs as suknia } from 'data';
import ImgsGrid from 'components/TableInfoComponents/ImgsGrid/ImgsGrid';

import s from './RefundInspection.module.scss';
const imgs = [
  { src: suknia.rozeva, name: 'suknia.rozeva' },
  { src: suknia.zelena, name: 'suknia.zelena' },
  { src: suknia.synia, name: 'suknia.synia' },
];
const refundReq = {
  type: 'CHANGE',
  reqItem: {
    _id: '5s6df1b5sd1gb31',
    sku: '513213213',
    atr_1: 'L',
    atr_2: 'Синя',
    name: 'Сукня шовкова',
    price: 2500,
    qtity: 1,
  },
  changeItem: {
    _id: 'sdfbdfg13df25g13',
    sku: '8491213875',
    atr_1: 'L',
    atr_2: 'Зелена',
    name: 'Сукня шовкова',
    price: 2500,
    qtity: 1,
  },
  imgs,
};
const RefundInspection = () => {
  return (
    <div className={s.RefundInspection}>
      <AccordeonItem title="Загальна інформація">
        <div className={s.ItemRefundInfo}>
          <CellGrid name="Повернення, №" title="" text="" />
          <CellGrid name="Замовлення, №" title="" text="" />
          <CellGrid name="Артикул" title="" text="" />
          <CellGrid name="Бренд" title="" text="" />
          <CellGrid name="Ціна" title="" text="" />
          <CellGrid name="Категорія" title="" text="" />
          <CellGrid name="Під категорія" title="" text="" />
          <CellGrid name="Тип запиту" title="" text="" />
          <CellGrid name="Опис" title="" text="" />
        </div>
      </AccordeonItem>

      <AccordeonItem title="Деталі запиту">
        <TableRefundRequest req={refundReq} />
      </AccordeonItem>

      <AccordeonItem title="Прикріплені файли">
        <ImgsGrid imgs={refundReq.imgs} />
      </AccordeonItem>

      <AccordeonItem title="Прийняття рішення">
        <FormRefundInspection />
      </AccordeonItem>
    </div>
  );
};

export default RefundInspection;
