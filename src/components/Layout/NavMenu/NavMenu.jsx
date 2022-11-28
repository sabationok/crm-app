import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { NavLink } from 'react-router-dom';

import s from './NavMenu.module.scss';

const NavMenu = ({ pageLinks = [], onClick }) => {
  return (
    <div className={s.menuBox}>
      <ButtonIcon iconId="actions-v" size="32px" className={s.button} />

      <ul className={s.navList}>
        {pageLinks.map(item => (
          <li key={item.path}>
            <NavLink to={item.path} className={({ isActive }) => (isActive ? s.navLinkActive : s.navLink)}>
              {item.iconId && <SvgIcon iconId={item.iconId} size="18px" />}
              <span>{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
