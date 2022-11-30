import React from 'react';
import { Outlet } from 'react-router-dom';

import MobileFooter from 'components/Layout/MobileFooter/MobileFooter';
import s from './AppMobilePage.module.scss';
const AppMobilePage = ({ children, page, path }) => {
  return (
    <>
      <div className={s.Page}>
        {children}
        <Outlet />
      </div>
      <MobileFooter path={path} />
    </>
  );
};

export default AppMobilePage;
