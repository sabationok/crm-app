import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { useSelector } from 'react-redux';
import { getAppPage } from 'redux/selectors';
import { NavLink } from 'react-router-dom';

import s from './MobileFooter.module.scss';

const MobileFooter = ({ navLinks = [] }) => {
  const { page } = useSelector(getAppPage);

  return (
    <div className={s.MobileFooter}>
      {page.mobilelinks.map(link => (
        <NavLink key={link?.path} to={link?.path} className={({ isActive }) => (isActive ? s.navLinkActive : s.navLink)}>
          <SvgIcon iconId={link?.iconId} size="20px" />
          <span className={s.linkTitle}>{link?.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default MobileFooter;
