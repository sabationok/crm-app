import React from 'react';
import Status from 'components/TableInfoComponents/Status/Status';

import s from './Delivery.module.scss';

const CellFlex = ({ item, title, dataKey, data }) => {
  const status = ['status', 'type'];

  return (
    <div className={s[dataKey] || ''}>
      <div className={s.title}>{title || ''}</div>

      <div className={s.inner}>
        <>{status.includes(dataKey) ? <Status status={data[dataKey]} /> : data[dataKey]}</>
      </div>
    </div>
  );
};

const DeliveryBottom = ({ data, titlesArr }) => {
  return (
    <div className={s.bottom}>
      {' '}
      {titlesArr.map(item => (
        <CellFlex key={item.dataKey} {...{ title: item.title, dataKey: item.dataKey, data }} />
      ))}
    </div>
  );
};

export default DeliveryBottom;
