import React from 'react';

import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useNavigate } from 'react-router-dom';

import s from './UserMenuActions.module.scss';

const ActionAppExit = () => {
  const navigate = useNavigate();
  function handleExitApp(params) {
    // eslint-disable-next-line no-restricted-globals
    const result = confirm('Бажаєте вийти?');

    if (result) {
      navigate('logout');
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
