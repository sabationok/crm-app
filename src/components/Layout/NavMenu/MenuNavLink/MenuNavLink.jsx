import React from 'react';

import { NavLink } from 'react-router-dom';
import { MaxToTablet, MinTabletXl } from 'components/DeviceTypeInformer/DeviceTypeController';

import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './MenuNavLink.module.scss';

const MenuNavLink = ({ item }) => {
  return (
    <>
      <MaxToTablet>
        <li>
          {/* <span>link</span> */}
          {/* <NavLink to={item.path} className={({ isActive }) => (isActive ? s.navLinkActive : s.navLink)}>
            {item.iconId && <SvgIcon iconId={item.iconId} size="18px" />}
            <span>{item.title}</span>
          </NavLink> */}
          <ul>
            {item.mobilelinks.map(link => (
              <li key={link.path}>
                <NavLink to={link.path} className={({ isActive }) => (isActive ? s.navLinkActive : s.navLink)}>
                  {link.iconId && <SvgIcon iconId={link.iconId} size="18px" />}
                  <span>{link.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      </MaxToTablet>
      <MinTabletXl>
        <li>
          <NavLink to={item.path} className={({ isActive }) => (isActive ? s.navLinkActive : s.navLink)}>
            {item.iconId && <SvgIcon iconId={item.iconId} size="18px" />}
            <span>{item.title}</span>
          </NavLink>
        </li>
      </MinTabletXl>
    </>
  );
};

export default MenuNavLink;
