import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { statusName, statusIconId } from 'data/constants';
import s from './Status.module.scss';
const Status = ({ status }) => {
  const compStatus = statusName[status] && statusIconId[status] ? status : 'default';
  const className = [s.statusBox, s[compStatus]].join(' ');

  return (
    <div className={className}>
      {statusIconId[status] && <SvgIcon iconId={statusIconId[compStatus]} size="18px" />}
      <span>{statusName[compStatus]}</span>
    </div>
  );
};

export default Status;
