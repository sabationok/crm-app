import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import s from './DesktopFooter.module.scss';

const DesktopFooter = () => {
  return (
    <div className={s.DesktopFooter}>
      <div className={s.gridMenu}><NavMenu /></div>
    </div>
  );
};

export default DesktopFooter;
