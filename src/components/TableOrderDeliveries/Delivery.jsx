import React from 'react';
import Status from 'components/TableProductInfo/Status/Status';

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
  return (
    <div className={s.delivery}>
      <div className={s.owner}>
        <div className={s.title}>{titles.owner}</div>
        <div className={s.inner}>{data?.owner}</div>
      </div>

      <div className={s.ttn}>
        <div className={s.title}>{titles.ttn}</div>
        <div className={s.inner}>{data?.ttn}</div>
      </div>

      <div className={s.status}>
        <div className={s.title}>{titles.status}</div>
        <div className={s.inner}>
          <Status status={data?.status} />
        </div>
      </div>

      <div className={s.type}>
        <div className={s.title}>{titles.type}</div>
        <div className={s.inner}>
          <Status status={data?.type} />
        </div>
      </div>

      <div className={s.cost}>
        <div className={s.title}>{titles.cost}</div>
        <div className={s.inner}>{data?.cost}</div>
      </div>

      <div className={s.transporter}>
        <div className={s.title}>{titles.transporter}</div>
        <div className={s.inner}>{data?.transporter}</div>
      </div>

      <div className={s.comment}>
        <div className={s.title}>{titles.comment}</div>
        <div className={s.inner}>{data?.comment}</div>
      </div>

      {/* <div className={''}>
        <div>{data?.owner}</div>
        <div>{titles.owner}</div>
      </div>

      <div className={''}>
        <div>{data?.owner}</div>
        <div>{titles.owner}</div>
      </div> */}
    </div>
  );
};

export default Delivery;
