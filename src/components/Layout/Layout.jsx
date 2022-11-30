import React from 'react';
import Header from './Header/Header';
import DesktopFooter from './DesktopFooter/DesktopFooter';

import { MinTabletXl } from 'components/DeviceTypeInformer/DeviceTypeController';
// import PropTypes from 'prop-types';

// import s from './Layout.module.scss';
const Layout = ({ children }) => {
  return (
    <>
      <Header />

      {children}

      <MinTabletXl>
        <DesktopFooter />
      </MinTabletXl>
    </>
  );
};

Layout.propTypes = {};

export default Layout;
