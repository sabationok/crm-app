import React from 'react';

import UserMenu from '../UserMenu/UserMenu';
import Notifications from 'components/Notify/Notifications/Notifications';
import PrivateComponent from 'components/PrivateComponent/PrivateComponent';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { Link } from 'react-router-dom';
import { useModal } from 'components/Modal/ModalComponent';

import s from './Header.module.scss';
const Header = () => {
  const { handleToggleModal } = useModal();
  return (
    <header className={[s.header, 'theme'].join(' ')}>
      <Link to="/home" className={s.logoLink}>
        <span className={s.logoText}>LOGO</span>
      </Link>

      <div></div>

      <PrivateComponent>
        <ButtonIcon iconId="notifications" size="28px" iconSize="100%" onClick={ev => handleToggleModal(ev, <Notifications />)} />

        <UserMenu />
      </PrivateComponent>
    </header>
  );
};

export default Header;
