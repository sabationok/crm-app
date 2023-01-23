import React from 'react';

import s from './RefundItemInfo.module.scss';

const RefundItemInfo = () => {
  return (
    <div className={s.RefundItemInfo}>
      <div className={s.itemRefundDescription}></div>
      <div className={s.itemIncomeImgs}></div>
      <div className={s.DecisionZone}>
        <div className={s.outImgs}></div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default RefundItemInfo;
