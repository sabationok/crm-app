import React from 'react';
import Header from './Header/Header';
import DesktopFooter from './DesktopFooter/DesktopFooter';
import MobileFooter from './MobileFooter/MobileFooter';

import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
// import PropTypes from 'prop-types';

// import s from './Layout.module.scss';
const Layout = ({ children }) => {
  return (
    <>
      <Header />

      {children}

      {/* <MaxToTablet>
        <MobileFooter />
      </MaxToTablet> */}
      
      <MinTabletXl>
        <DesktopFooter />
      </MinTabletXl>
    </>
  );
};

Layout.propTypes = {};

export default Layout;
