import React from 'react';
import { Outlet } from 'react-router-dom';
import s from './AppMobilePage.module.scss';
const AppMobilePage = ({ children, page }) => {
  return (
    <>
      <div className={s.Page}>
        {children}
        <Outlet />
      </div>
    </>
  );
};

export default AppMobilePage;
