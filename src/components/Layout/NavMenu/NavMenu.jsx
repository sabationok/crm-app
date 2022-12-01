import React, { useState } from 'react';

import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import MenuNavLink from './MenuNavLink/MenuNavLink';

import { pagesRoutes } from 'components/pagesRoutes';

import s from './NavMenu.module.scss';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState();

  const pagesRoutesArr = pagesRoutes.length > 0 ? pagesRoutes : [];

  function handleToggleMenu(ev) {
    setIsOpen(!isOpen);
  }

  return (
    <div className={isOpen ? s.menuOpen : s.menu} onClick={handleToggleMenu}>
      <ButtonIcon iconId={isOpen ? 'close' : 'burger'} size="40px" iconSize="100%" className={s.button} />

      <ul className={s.navList}>
        {pagesRoutesArr.map(link => (
          <MenuNavLink key={link.path} item={link} />
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
