import React from 'react';

import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useDispatch } from 'react-redux';
import { userLogOut } from 'redux/auth/authThunks';
import { actionResetAppSettings } from 'redux/appSettings/appSettingsActions';
import { toast } from 'react-toastify';

import s from './UserMenuActions.module.scss';
import { actionResetPageSettings } from 'redux/page/pageActions';

const ActionAppExit = () => {
  const dispatch = useDispatch();

  function handleExitApp() {
    const result = window.confirm('Бажаєте вийти?');
    const payload = {
      onSuccess: () => {
        toast.success('Вдалого вам дня');
      },
    };
    if (result) {
      dispatch(actionResetPageSettings());
      dispatch(actionResetAppSettings());
      dispatch(userLogOut(payload));
    }
  }

  return (
    <li className={s.actionItem}>
      <ButtonIcon iconId="logout" to="loguot" className={s.actionBtn} onClick={handleExitApp}>
        {'Вийти'}
      </ButtonIcon>
    </li>
  );
};
export default ActionAppExit;
