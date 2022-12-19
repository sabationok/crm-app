import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './Status.module.scss';
const Status = ({ status }) => {
  const statusName = {
    success: 'Прийнято',
    pending: 'Очікує',
    rejected: 'Відхилено',
    visible: 'Видимий',
    hidden: 'Прихований',
    available: 'У наявності',
    notAvailable: 'Відсутній',
    awaitingOnStock: 'Очікується',
    default: 'Відсутній',
  };
  const iconId = {
    success: 'success',
    pending: 'time',
    rejected: 'error',
    visible: 'visibility-on',
    hidden: 'visibility-off',
    available: 'success',
    notAvailable: 'clear',
    awaitingOnStock: 'time',
    default: 'info',
  };

  const compStatus = statusName[status] && iconId[status] ? status : 'default';
  const className = [s.statusBox, s[compStatus]].join(' ');

  return (
    <div className={className}>
      <SvgIcon iconId={iconId[compStatus]} size="18px" />
      <span>{statusName[compStatus]}</span>
    </div>
  );
};

export default Status;
