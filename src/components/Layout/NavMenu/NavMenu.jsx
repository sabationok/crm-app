import React from 'react';

import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import MenuNavLink from './MenuNavLink/MenuNavLink';

import { pageLinks } from './pageLinks';

import s from './NavMenu.module.scss';

const NavMenu = () => {
  const pageLinksArr = pageLinks.length > 0 ? pageLinks : [];
  return (
    <div className={s.menuBox}>
      <ButtonIcon iconId="actions-v" size="32px" iconSize="100%" className={s.button} />

      <ul className={s.navList}>
        {pageLinksArr.map(link => (
          <MenuNavLink key={link.path} item={link} />
        ))}
        {/* {pageLinksArr.map(item => (
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
