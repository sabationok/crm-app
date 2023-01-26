import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { statusData } from 'data';

import s from './Status.module.scss';
const Status = ({ status, icon = true }) => {
  const className = [s.statusBox, s[status] || s.default].join(' ');

  return (
    <div className={className}>
      {icon && (
        <>
          <SvgIcon iconId={statusData?.iconId[status] || 'info'} size="18px" />
        </>
      )}

      <span>{statusData?.name[status] || 'default'}</span>
    </div>
  );
};

export default Status;
