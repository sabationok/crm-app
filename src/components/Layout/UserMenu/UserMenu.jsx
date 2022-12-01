import React from 'react';

import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import ActionToggleAppTheme from './UserMenuActions/ActionToggleAppTheme';
import ActionAppExit from './UserMenuActions/ActionAppExit';

import s from './UserMenu.module.scss';
const UserMenu = () => {
  return (
    <div className={s.box}>
      <ButtonIcon iconId="person" size="30px" iconSize="100%" className={s.openButton} />

      <ul className={s.list}>
        <ActionToggleAppTheme />
        <ActionAppExit />
      </ul>
    </div>
  );
};

export default UserMenu;
