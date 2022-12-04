import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DesktopFooter from 'components/Layout/DesktopFooter/DesktopFooter';
import { Outlet } from 'react-router-dom';

import s from './AppGridPage.module.scss';
import { useDispatch } from 'react-redux';
import { actionSetIndexPage } from 'redux/page/pageActions';
import MobileFooter from 'components/Layout/MobileFooter/MobileFooter';
// import { generatePath } from 'react-router-dom';
const AppGridPage = ({ path }) => {
  const dispatch = useDispatch();

  // const generatedPath = generatePath('/users/:id', { id: '42' });
  // console.log(generatedPath);

  // const currentLocation = window.location;
  // console.log(currentLocation);

  // console.log(path);
  useEffect(() => {
    if (path) {
      dispatch(actionSetIndexPage(path));
    }
  }, [dispatch, path]);

  return (
    <>
      <div className={s.pageGrid}>
        <Outlet />
      </div>
      <DesktopFooter />
      <MobileFooter path={path}/>
    </>
  );
};

AppGridPage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default AppGridPage;
