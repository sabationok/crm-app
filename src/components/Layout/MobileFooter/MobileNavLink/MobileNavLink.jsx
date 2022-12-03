import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './MobileNavLink.module.scss';

const MobileNavLink = ({ device, path, iconId, title, navLink = true }) => {
  return (
    <>
      {navLink && (
        <NavLink to={path} className={({ isActive }) => (isActive ? s.navLinkActive : s.navLink)} title={title}>
          <SvgIcon iconId={iconId} size="20px" />
          <span className={s.linkTitle}>{title}</span>
        </NavLink>
      )}
      {!navLink && (
        <Link to={path} className={s.navLink} title={title}>
          <SvgIcon iconId={iconId} size="20px" />
          <span className={s.linkTitle}>{title}</span>
        </Link>
      )}
    </>
  );
};

export default MobileNavLink;
