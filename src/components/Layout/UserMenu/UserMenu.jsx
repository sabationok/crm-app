import React from 'react';

import SvgIcon from 'components/SvgIcon/SvgIcon';
import ActionToggleAppTheme from './UserMenuActions/ActionToggleAppTheme';
import ActionAppExit from './UserMenuActions/ActionAppExit';

import s from './UserMenu.module.scss';
const UserMenu = () => {
  return (
    <div className={s.menuBox}>
      <SvgIcon iconId="person" size={'32px'} />
      <ul className={s.profileInfoList}>
        <ActionToggleAppTheme />
        <ActionAppExit/>
      </ul>
    </div>
  );
};

export default UserMenu;
