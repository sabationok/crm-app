import React from 'react';

import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useDispatch } from 'react-redux';
import { actionLogOutUser } from 'redux/auth/authActions';
import { toast } from 'react-toastify';

import s from './UserMenuActions.module.scss';

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
      dispatch(actionLogOutUser(payload));
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
