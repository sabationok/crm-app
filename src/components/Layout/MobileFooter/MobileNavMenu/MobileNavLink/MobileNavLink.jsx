import React from 'react';
import { NavLink } from 'react-router-dom';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './MobileNavLink.module.scss'

const MobileNavLink = ({link}) => {
  return (
    <div key={`${link?.device}/${link?.path}`} title={link?.title}>
      <NavLink to={link?.path} className={({ isActive }) => (isActive ? s.navLinkActive : s.navLink)}>
        <SvgIcon iconId={link?.iconId} size="20px" />
        <span className={s.linkTitle}>{link?.title}</span>
      </NavLink>
    </div>
  );
};

export default MobileNavLink;
