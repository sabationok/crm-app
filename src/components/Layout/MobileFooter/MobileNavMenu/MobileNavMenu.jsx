import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { NavLink, Link } from 'react-router-dom';

import s from './MobileNavMenu.module.scss';

const MobileNavMenu = ({ navLinkArr }) => {
  return (
    <ul className={s.MobileNavMenu}>
      {navLinkArr.length > 0 &&
        navLinkArr.map(link => (
          <li>
            <NavLink key={link?.path} to={link?.path} className={({ isActive }) => (isActive ? s.navLinkActive : s.navLink)}>
              <SvgIcon iconId={link?.iconId} size="20px" />
              <span className={s.linkTitle}>{link?.title}</span>
            </NavLink>
          </li>
        ))}
      {navLinkArr.length < 0 && (
        <li>
          <Link to={'/'} className={s.navLink}>
            <SvgIcon iconId={'home'} size="20px" />
            <span className={s.linkTitle}>{'Головна'}</span>
          </Link>
        </li>
      )}
    </ul>
  );
};

export default MobileNavMenu;
