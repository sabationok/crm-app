import React from 'react';
import AccordeonItem from 'components/TableInfoComponents/AccordeonItem/AccordeonItem';
import CellGrid from 'components/TableInfoComponents/Cells/CellGrid';
import FormRefundInspection from 'components/Forms/FormRefundInspection/FormRefundInspection';

import s from './RefundInspection.module.scss';

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

      <AccordeonItem title="Оброблення запиту">{/* <div className={s.itemIncomeImgs}></div> */}</AccordeonItem>

      <AccordeonItem title="Прийняття рішення">
        <FormRefundInspection />
      </AccordeonItem>
    </div>
  );
};

export default RefundInspection;
