import React, { useState } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import ModalContent from 'components/ModalCustom/ModalContent/ModalContent';
import DeliveryBottom from './DeliveryBottom';
import DeliveryTop from './DeliveryTop';
import { toast } from 'react-toastify';

import s from './Delivery.module.scss';

const titlesArr = [
  { title: 'Номер ТТН', dataKey: 'ttn' },
  { title: 'Перевізник', dataKey: 'transporter' },
  { title: 'Замовлення', dataKey: 'owner' },
  { title: 'Статус', dataKey: 'status' },
  { title: 'Тип', dataKey: 'type' },
  { title: 'Вартість доставки', dataKey: 'cost' },
  { title: 'Коментар', dataKey: 'comment' },
];

const Delivery = ({ data }) => {
  console.log('delivery', data);
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenDelivery(ev) {
    setIsOpen(!isOpen);
  }
  function handleDelete(ev) {
    const res = window.confirm('Видалити?');
    if (!res) {
      return;
    }
    toast.success('Видалено');
  }
  return (
    <div className={[s.delivery, isOpen && s.open].join(' ')}>
      <DeliveryTop {...{ data, titlesArr }} />

      <div className={s.actions}>
        <div className={s.wrapper}>
          <ModalContent trigger={props => <ButtonIcon className={s.btn} iconSize="28px" iconId="edit" {...props} />}></ModalContent>

          <ButtonIcon className={s.btn} iconSize="28px" iconId="delete" onClick={handleDelete} />

          <ButtonIcon
            className={s.btn}
            iconSize="28px"
            iconId="print"
            onClick={() => {
              toast.error('Відсутній елемент для друку');
            }}
          />

          <ButtonIcon className={s.btn} iconSize="28px" iconId="info" />

          <ButtonIcon className={s.btn} iconSize="28px" iconId="select-arrow" iconClassName={s.icon} onClick={handleOpenDelivery} />
        </div>
      </div>

      <DeliveryBottom {...{ data, titlesArr }} />
    </div>
  );
};

export default Delivery;
