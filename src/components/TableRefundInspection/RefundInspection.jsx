import React from 'react';
import AccordeonItem from 'components/TableInfoComponents/AccordeonItem/AccordeonItem';

import s from './RefundInspection.module.scss';
import PrimaryInput from 'components/Forms/Inputs/PrimaryInput/PrimaryInput';
import CellGrid from 'components/TableInfoComponents/Cells/CellGrid';
import InputImg from 'components/Forms/Inputs/InputImg/InputImg';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { toast } from 'react-toastify';
// import { useState } from 'react';

const RefundInspection = () => {
  // const [formData, setFormData] = useState({});
  function onFormSubmit(ev) {
    ev.preventDefault();

    const payload = {
      submitData: {},
      onSuccess: () => {
        toast.success(`Статус змінено`);
      },
      onError: () => {},
    };

    payload.onSuccess();
  }

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
        <form className={s.DecisionZone} onSubmit={onFormSubmit}>
          <div className={s.inputs}>
            <PrimaryInput label="Статус" />
            <PrimaryInput label="Причина" />
            <PrimaryInput label="Коментар для клієнта" />
            <PrimaryInput label="Коментар для менеджера" />
          </div>
          <div className={s.outImgs}>
            <img src="" alt="" />
            <InputImg />
          </div>
          <div className={s.buttons}>
            <ButtonIcon type="submit" styleType="BrandClrBtn">
              Прийняти
            </ButtonIcon>
            <ButtonIcon styleType="ErrorClrBtn">Відхилити</ButtonIcon>
          </div>
        </form>
      </AccordeonItem>
    </div>
  );
};

export default RefundInspection;
