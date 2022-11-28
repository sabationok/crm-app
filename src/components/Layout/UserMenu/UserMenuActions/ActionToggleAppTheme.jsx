import React from 'react';

import { useDispatch } from 'react-redux';
import { actionChangeTheme } from 'redux/appSettings/appSettingsActions';

import s from './UserMenuActions.module.scss';

export const ActionToggleAppTheme = () => {
  const dispatch = useDispatch();
  function handleToggleAppTheme(params) {
    dispatch(actionChangeTheme());
  }
  return (
    <li>
      <button type="button" className={s.actionItem} onClick={handleToggleAppTheme}>
        Змінити тему
      </button>
    </li>
  );
};
