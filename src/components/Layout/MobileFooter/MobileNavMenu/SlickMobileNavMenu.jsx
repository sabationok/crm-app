import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { NavLink, Link } from 'react-router-dom';
import Slider from 'react-slick';

import s from './MobileNavMenu.module.scss';

const SlickMobileNavMenu = ({ navLinkArr }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: navLinkArr.length < 3 ? navLinkArr.length : 3,
    slidesToScroll: 1,
  };
  return (
    <>
      {navLinkArr.length > 0 && (
        <Slider {...settings}>
          {navLinkArr.map(link => (
            <div key={link?.path} title={link?.title}>
              <NavLink to={link?.path} className={({ isActive }) => (isActive ? s.navLinkActive : s.navLink)}>
                <SvgIcon iconId={link?.iconId} size="20px" />
                <span className={s.linkTitle}>{link?.title}</span>
              </NavLink>
            </div>
          ))}
        </Slider>
      )}
      
      {navLinkArr.length === 0 && (
        <div>
          <Link to={'/'} className={s.navLink}>
            <SvgIcon iconId={'home'} size="20px" />
            <span className={s.linkTitle}>{'Головна'}</span>
          </Link>
        </div>
      )}
    </>
  );
};
export default SlickMobileNavMenu;
