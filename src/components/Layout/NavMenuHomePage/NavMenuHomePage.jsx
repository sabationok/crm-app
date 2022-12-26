import React from 'react';

import NavLinkHomePage from './NavLinkHomePage/NavLinkHomePage';

import { pagesRoutes } from 'data/pagesRoutes';

import s from './NavMenuHomePage.module.scss';

const NavMenuHomePage = () => {
  const pagesRoutesArr = pagesRoutes.length > 0 ? pagesRoutes : [];

  return (
    <div className={s.menu}>
      <ul className={[s.navList].join(' ')}>
        {pagesRoutesArr.map(link => (
          <NavLinkHomePage key={link.path} item={link} />
        ))}
      </ul>
    </div>
  );
};

export default NavMenuHomePage;
