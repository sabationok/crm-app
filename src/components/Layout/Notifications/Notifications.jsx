import React from 'react';

import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import ModalOpenLink from 'components/ModalCustom/ModalOpenLink/ModalOpenLink';

import Notification from './Notification/Notification';

import { getAppNotify, getAppSettings } from 'redux/selectors';
import { useSelector } from 'react-redux';

import s from './Notifications.module.scss';
const Notifications = () => {
  const { notifications } = useSelector(getAppNotify);
  const { isDarkTheme } = useSelector(getAppSettings);
  
  return (
    <ModalOpenLink
      modalContent={
        <>
          <div className={[s.Notifications, isDarkTheme ? s.Dark : s.Light].join(' ')}>
            <div className={s.headerGrid}>
              <span>Історія сповіщень</span>
              <span>{`У Вас ${notifications.length} сповіщень`}</span>
            </div>
            <ul className={s.list}>
              {notifications.map(item => (
                <Notification key={item.id} {...item} />
              ))}
            </ul>
          </div>
        </>
      }
    >
      <ButtonIcon iconId="notifications" size="32px" iconSize="100%" className={s.openButton} />
    </ModalOpenLink>
  );
};

export default Notifications;
