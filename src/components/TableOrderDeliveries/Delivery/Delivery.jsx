import React, { useState } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import ModalContent from 'components/ModalCustom/ModalContent/ModalContent';
import DeliveryBottom from './DeliveryBottom';
import DeliveryTop from './DeliveryTop';
import { toast } from 'react-toastify';

import s from './Delivery.module.scss';

const titles = {
  owner: 'Замовлення',
  transporter: 'Перевізник',
  status: 'Статус',
  type: 'Тип',
  ttn: 'Номер ТТН',
  cost: 'Вартість доставки',
  comment: 'Коментар',
};
const Delivery = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenDel(ev) {
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
      <DeliveryTop data={data} titles={titles} s={s} />

      <div className={s.actions}>
        <div className={s.wrapper}>
          <ModalContent
            trigger={props => (
              <ButtonIcon className={s.btn} iconSize="28px" iconId="edit" {...props}>
                Змінити
              </ButtonIcon>
            )}
          ></ModalContent>
          <ButtonIcon className={s.btn} iconSize="28px" iconId="delete" onClick={handleDelete}>
            Видалити
          </ButtonIcon>
          <ButtonIcon className={s.btn} iconSize="28px" iconId="select-arrow" iconClassName={s.icon} onClick={handleOpenDel}>
            {isOpen ? 'Згорнути' : 'Розгорнути'}
          </ButtonIcon>
        </div>
      </div>

      <DeliveryBottom data={data} titles={titles} s={s} />
    </div>
  );
};

export default Delivery;
