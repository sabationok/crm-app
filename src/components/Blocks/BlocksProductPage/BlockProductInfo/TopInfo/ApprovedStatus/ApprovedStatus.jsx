import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './ApprovedStatus.module.scss';
const ApprovedStatus = ({ status = 'pending' }) => {
  const className = [s.statusBox, s[status]].join(' ');
  // const text = isApproved ? 'Прийнято' : 'Очікує перегляду';
  const text = {
    success: 'Прийнято',
    pending: 'Очікує перегляду',
    rejected: 'Відхилено',
  };
  const iconId = {
    success: 'success',
    pending: 'time',
    rejected: 'info',
  };
  return (
    <div className={className}>
      <SvgIcon iconId={iconId[status]} size="18px" />
      <span>{text[status]}</span>
    </div>
  );
};

export default ApprovedStatus;
