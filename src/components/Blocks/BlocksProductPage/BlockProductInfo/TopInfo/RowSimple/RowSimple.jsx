import SvgIcon from 'components/SvgIcon/SvgIcon';
import React from 'react';

import s from './RowSimple.module.scss';

const RowSimple = ({ title = '', data, info = '' }) => {
  return (
    <div className={s.row}>
      <div className={s.col}>
        {title}
        {info && (
          <div className={s.infoBox}>
            <SvgIcon iconId="info" size="18px" />
            <div className={s.info}>
              <span>{info}</span>
            </div>
          </div>
        )}
      </div>
      <div className={s.col}>{data}</div>
    </div>
  );
};

export default RowSimple;
