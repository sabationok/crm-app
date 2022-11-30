import React from 'react';

import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import MenuNavLink from './MenuNavLink/MenuNavLink';

import { pagesRoutes } from 'components/pagesRoutes';

import s from './NavMenu.module.scss';

const NavMenu = () => {
  const pagesRoutesArr = pagesRoutes.length > 0 ? pagesRoutes : [];
  return (
    <div className={s.menuBox}>
      <ButtonIcon iconId="actions-v" size="32px" iconSize="100%" className={s.button} />

      <ul className={s.navList}>
        {pagesRoutesArr.map(link => (
          <MenuNavLink key={link.path} item={link} />
        ))}
        {/* {pagesRoutesArr.map(item => (
          <li key={item.path}>
            <NavLink to={item.path} className={({ isActive }) => (isActive ? s.navLinkActive : s.navLink)}>
              {item.iconId && <SvgIcon iconId={item.iconId} size="18px" />}
              <span>{item.title}</span>
            </NavLink>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default NavMenu;
