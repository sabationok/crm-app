import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import { useBlock } from 'components/Block/BlockContext';
import s from './RowSimple.module.scss';

const RowSimple = ({ title = '', data, info = '' }) => {
  const { isDarkTheme } = useBlock();

  return (
    <div className={isDarkTheme ? s.darkRow : s.row}>
      <div className={s.col1}>
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
      <div className={s.col2}>{data}</div>
    </div>
  );
};

export default RowSimple;
