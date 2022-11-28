import React from 'react';

import SvgIcon from 'components/SvgIcon/SvgIcon';
import NavMenu from '../NavMenu/NavMenu';
import UserMenu from '../UserMenu/UserMenu';
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

import s from './Header.module.scss';
const Header = () => {
  // const location = useLocation();

  const pageLinks = [
    { title: 'Головна', path: 'main', iconId: 'home' },
    { title: 'Замовлення', path: 'orders', iconId: 'addtoCart' },
    { title: 'Повернення', path: 'returns', iconId: 'return' },
    { title: 'Товари', path: 'products', iconId: 'storage' },
    { title: 'Статистика', path: 'statistics', iconId: 'statistics' },
    { title: 'Контрагенти', path: 'counterParty', iconId: 'persons' },
    { title: 'Налаштування', path: 'settings', iconId: 'settings' },
    { title: 'Адмін панель', path: 'admin', iconId: 'admin' },
    { title: 'Вихід', path: 'logOut', iconId: 'logout' },
  ];
  // function findMe() {
  //   const clearPathName = location.pathname.replace('/', '');
  //   console.log(clearPathName);
  //   const foundedPageObj = pageLinks.find(item => item.path === clearPathName);
  //   return foundedPageObj.title;
  // }

  return (
    <header className={s.header}>
      <NavMenu pageLinks={pageLinks} />

      <Link to="/" className={s.logoLink}>
        <span className={s.logoText}>LOGO</span>
      </Link>

      <div>{/* <span>{findMe()}</span> */}</div>

      <SvgIcon iconId="chat" size={'32px'} />

      <UserMenu />
    </header>
  );
};

export default Header;
