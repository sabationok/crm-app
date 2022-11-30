import React from 'react';

import MobileNavMenu from './MobileNavMenu/MobileNavMenu';
import { MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import NavMenu from '../NavMenu/NavMenu';

import { mobilePageRoutes } from 'components/pagesRoutes';

import s from './MobileFooter.module.scss';

const MobileFooter = props => {
  const filteredNavLinks = mobilePageRoutes.filter(link => link.parentPath === props.path);

  return (
    <div className={s.MobileFooter}>
      <div className={s.gridLeft}></div>
      
      <div className={s.gridCenter}>
        <MaxToTablet>
          <MobileNavMenu navLinkArr={filteredNavLinks} />
        </MaxToTablet>
      </div>

      <div className={s.gridRight}>
        <NavMenu />
      </div>
    </div>
  );
};

export default MobileFooter;
