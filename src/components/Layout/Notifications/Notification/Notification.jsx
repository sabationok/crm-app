import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { getAppSettings } from 'redux/selectors';
import { useSelector } from 'react-redux';

import s from './Notification.module.scss';

const Notification = ({ title, text, id, createdAt, type }) => {
  const { isDarkTheme } = useSelector(getAppSettings);
  const normalize = item => {
    return String(item).padStart(2, '0');
  };
  const date = new Date(createdAt);
  const day = normalize(date.getDate());
  const month = normalize(1 + date.getMonth());
  const year = date.getFullYear();
  const hours = normalize(date.getHours());
  const minutes = normalize(date.getMinutes());

  return (
    <>
      <div className={s[type]}>
        <div className={isDarkTheme ? s.NotificationDark : s.NotificationLight}>
          <SvgIcon iconId={type} size="24px" />
          <span className={s.title}>{title}</span>
          <span className={s.text}>{text}</span>
          <span className={s.createdAt}>{`${day}.${month}.${year} ${hours}:${minutes}`}</span>
        </div>
      </div>
    </>
  );
};

export default Notification;
