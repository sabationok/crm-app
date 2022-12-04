import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import { MinTabletXl } from 'components/DeviceTypeInformer/DeviceTypeController';
import s from './DesktopFooter.module.scss';

const DesktopFooter = () => {
  return (
    <MinTabletXl>
      <div className={[s.DesktopFooter, 'theme'].join(' ')}>
        <div className={s.gridMenu}>
          <NavMenu />
        </div>
      </div>
    </MinTabletXl>
  );
};

export default DesktopFooter;
