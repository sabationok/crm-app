import React from 'react';

import SvgIcon from 'components/SvgIcon/SvgIcon';
import { ActionToggleAppTheme } from './UserMenuActions/ActionToggleAppTheme';
import { useDispatch } from 'react-redux';
import { actionChangeTheme } from 'redux/appSettings/appSettingsActions';

import s from './UserMenu.module.scss';
const UserMenu = () => {
  const dispatch = useDispatch();
  function handleToggleAppTheme(params) {
    dispatch(actionChangeTheme());

  }

  return (
    <div className={s.menuBox}>
      <SvgIcon iconId="person" size={'32px'} />
      <ul className={s.profileInfoList}>
        <ActionToggleAppTheme/>
        <li>
          <button type="button" className={s.actionItem}>
            Вихід
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
