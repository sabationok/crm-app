import React from 'react';

import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import s from './UserMenuActions.module.scss';

const ActionAppExit = () => {
  function handleToggleAppTheme(params) {}
  return (
    <li>
      <ButtonIcon iconId='logout' className={s.actionItem} onClick={handleToggleAppTheme}>
        {'Вийти'}
      </ButtonIcon>
    </li>
  );
};
export default ActionAppExit;
