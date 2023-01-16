import React from 'react';
import DeliveryCellBottom from '../DeliveryCellBottom/DeliveryCellBottom';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import ModalContent from 'components/ModalCustom/ModalContent/ModalContent';
import { toast } from 'react-toastify';

import s from './DeliveryBottom.module.scss';

const bottomTitlesArr = [
  { title: 'Створено', dataKey: 'createdAt' },
  { title: 'Створив', dataKey: 'creator' },
  { title: 'Оновлено', dataKey: 'updatedAt' },
  { title: 'Оновив', dataKey: 'updator' },
  { title: 'Номер ТТН', dataKey: 'ttn' },
  { title: 'Статус', dataKey: 'status' },
  { title: 'Тип', dataKey: 'type' },
  { title: 'Замовлення', dataKey: 'owner' },
  { title: 'Перевізник', dataKey: 'transporter' },
  { title: 'Вартість доставки', dataKey: 'cost' },
  // { title: 'Місце призначення', dataKey: 'destination' },
  { title: 'Коментар', dataKey: 'comment' },
  // { title: '', dataKey: '',  },
];

const DeliveryBottom = ({ data }) => {
  function handleDelete(ev) {
    const res = window.confirm('Видалити?');
    if (!res) {
      return;
    }
    toast.success(`Відвантаження "${data.ttn}" видалено `);
  }

  return (
    <div className={s.deliveryBottom}>
      <ul className={s.container}>
        {bottomTitlesArr.map((item, idx) => (
          <DeliveryCellBottom key={item.dataKey} {...{ title: item.title, dataKey: item.dataKey, data }} />
        ))}
      </ul>

      <div className={s.actions}>
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
      </div>
    </div>
  );
};

export default DeliveryBottom;
