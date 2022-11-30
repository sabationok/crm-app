import React from 'react';

import UserMenu from '../UserMenu/UserMenu';
import Notifications from 'components/Notify/Notifications/Notifications';
import { Link } from 'react-router-dom';

import s from './Header.module.scss';
const Header = () => {
  return (
    <header className={s.header}>
      <Link to="/" className={s.logoLink}>
        <span className={s.logoText}>LOGO</span>
      </Link>

      <div></div>

      <Notifications />

      <UserMenu />
    </header>
  );
};

export default Header;
