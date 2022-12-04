import React from 'react';

import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import s from './UserMenuActions.module.scss';

const ActionAppExit = () => {
  function handleToggleAppTheme(params) {}
  return (
    <li className={s.actionItem}>
      <ButtonIcon iconId='logout' className={s.actionBtn} onClick={handleToggleAppTheme}>
        {'Вийти'}
      </ButtonIcon>
    </li>
  );
};
export default ActionAppExit;
