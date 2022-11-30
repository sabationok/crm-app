import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { NavLink } from 'react-router-dom';

import { mobilePageRoutes } from 'components/pagesRoutes';

import s from './MobileFooter.module.scss';

const MobileFooter = props => {
  const filteredNavLinks = mobilePageRoutes.filter(link => link.parentPath === props.path);

  return (
    <div className={s.MobileFooter}>
      {filteredNavLinks.length > 0 &&
        filteredNavLinks.map(link => (
          <NavLink key={link?.path} to={link?.path} className={({ isActive }) => (isActive ? s.navLinkActive : s.navLink)}>
            <SvgIcon iconId={link?.iconId} size="20px" />
            <span className={s.linkTitle}>{link?.title}</span>
          </NavLink>
        ))}
    </div>
  );
};

export default MobileFooter;
