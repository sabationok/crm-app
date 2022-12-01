import React from 'react';

import { MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import NavMenu from '../NavMenu/NavMenu';
import SlickMobileNavMenu from './MobileNavMenu/SlickMobileNavMenu';

import { mobilePageRoutes } from 'components/pagesRoutes';

import s from './MobileFooter.module.scss';

const MobileFooter = ({ path = '/', ...props }) => {
  const filteredNavLinks = mobilePageRoutes.filter(link => link.parentPath === path);

  return (
    <div className={s.MobileFooter}>
      <div className={s.gridLeft}></div>

      <div className={s.gridCenter}>
        <MaxToTablet>
          {/* <MobileNavMenu navLinkArr={filteredNavLinks} /> */}
          <SlickMobileNavMenu navLinkArr={filteredNavLinks} />
        </MaxToTablet>
      </div>

      <div className={s.gridRight}>
        <NavMenu size="40px" />
      </div>
    </div>
  );
};

export default MobileFooter;
