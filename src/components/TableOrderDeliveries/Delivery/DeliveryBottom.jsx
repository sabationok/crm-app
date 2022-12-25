import React from 'react';
import Status from 'components/TableProductInfo/Status/Status';

const DeliveryBottom = ({ data, titles, s }) => {
  return (
    <div className={s.bottom}>
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
    </div>
  );
};

export default DeliveryBottom;
