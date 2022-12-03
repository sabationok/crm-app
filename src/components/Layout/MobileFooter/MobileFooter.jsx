import React from 'react';

import { MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import NavMenu from '../NavMenu/NavMenu';
import SlickMobileNavMenu from './MobileNavMenu/SlickMobileNavMenu';
import { mobilePageRoutes } from 'components/pagesRoutes';
import MobileNavLink from './MobileNavLink/MobileNavLink';

import s from './MobileFooter.module.scss';

const MobileFooter = ({ path = '/', ...props }) => {
  const filteredNavLinks = mobilePageRoutes.filter(link => link.parentPath === path && link?.navLink !== false);
  const link = mobilePageRoutes.find(link => link.parentPath === path && link?.navLink === false);

  return (
    <MaxToTablet>
      <div className={s.MobileFooter}>
        <div className={s.gridLeft}>{filteredNavLinks.length > 0 && link && <MobileNavLink {...link} />}</div>

        <div className={s.gridCenter}>
          <MaxToTablet>
            <SlickMobileNavMenu navLinkArr={filteredNavLinks} />
          </MaxToTablet>
        </div>

        <div className={s.gridRight}>
          <NavMenu size="40px" />
        </div>
      </div>
    </MaxToTablet>
  );
};

export default MobileFooter;
