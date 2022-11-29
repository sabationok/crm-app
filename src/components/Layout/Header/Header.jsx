import React from 'react';

import NavMenu from '../NavMenu/NavMenu';
import UserMenu from '../UserMenu/UserMenu';
import Notifications from 'components/Notify/Notifications/Notifications';
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

import s from './Header.module.scss';
const Header = () => {
  // const location = useLocation();

  // function findMe() {
  //   const clearPathName = location.pathname.replace('/', '');
  //   console.log(clearPathName);
  //   const foundedPageObj = pageLinks.find(item => item.path === clearPathName);
  //   return foundedPageObj.title;
  // }

  return (
    <header className={s.header}>
      <NavMenu />

      <Link to="/" className={s.logoLink}>
        <span className={s.logoText}>LOGO</span>
      </Link>

      <div>{/* <span>{findMe()}</span> */}</div>

      <Notifications />

      <UserMenu />
    </header>
  );
};

export default Header;
