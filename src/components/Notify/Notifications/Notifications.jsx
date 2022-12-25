import React from 'react';
import ModalContent from 'components/ModalCustom/ModalContent/ModalContent.jsx';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon.jsx';
import DeleteAllTotifyBtn from './Notification/DeleteAllTotifyBtn.jsx';
import Notification from './Notification/Notification';

import { getAppNotify, getAppSettings } from 'redux/selectors';
import { useSelector } from 'react-redux';

import s from './Notifications.module.scss';

const Notifications = () => {
  const { notifications } = useSelector(getAppNotify);
  const { isDarkTheme } = useSelector(getAppSettings);
  const count = notifications.length;
  return (
    <>
      <ModalContent trigger={props => <ButtonIcon iconId="notifications" size="28px" iconSize="100%" {...props} />}>
        <>
          {' '}
          <div className={[s.Notifications, isDarkTheme ? s.Dark : s.Light].join(' ')}>
            <div className={s.headerGrid}>
              <span className={s.titleGrid}>Історія сповіщень</span>
              <span className={s.deleteBtnGrid}>
                <DeleteAllTotifyBtn />
              </span>
              <span className="">Кількість сповіщень</span>
              <span className={s.counterGrid}>{count}</span>
            </div>
            {count <= 0 && <div className={s.empty}>{'Сповіщення відсутні'}</div>}
            {count > 0 && (
              <ul className={s.list}>
                {notifications.map(item => (
                  <Notification key={item.id} {...item} />
                ))}
              </ul>
            )}
          </div>
        </>
      </ModalContent>
    </>
  );
};

export default Notifications;
