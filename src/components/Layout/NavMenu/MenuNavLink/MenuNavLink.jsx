import { useState } from 'react';

import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { MaxToTablet, MinTabletXl } from 'components/DeviceTypeInformer/DeviceTypeController';

import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './MenuNavLink.module.scss';

const MenuNavLink = ({ item }) => {
  const [isOpen, setisOpen] = useState(false);
  function handleToggleSubListOpen() {
    setisOpen(!isOpen);
  }

  return (
    <>
      <MaxToTablet>
        <li className={s.navItem}>
          <ButtonIcon iconId={item.iconId} className={s.openBtn} onClick={handleToggleSubListOpen}>
            <span className={s.btnTitle}>{item.title}</span>
            {item.mobilelinks.length > 0 && (
              <SvgIcon iconId="select-arrow" size="12px" svgClass={!isOpen && s.btnArrow} />
            )}
          </ButtonIcon>
          {item?.mobilelinks.length > 0 && (
            <ul className={[s.subNavList, isOpen && s.isOpen].join(' ')}>
              {item?.mobilelinks.map(link => (
                <li key={link.path}>
                  <NavLink to={link.path} className={({ isActive }) => (isActive ? s.navLinkActive : s.navLink)}>
                    {link.iconId && <SvgIcon iconId={link.iconId} size="18px" />}
                    <span>{link.title}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
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
