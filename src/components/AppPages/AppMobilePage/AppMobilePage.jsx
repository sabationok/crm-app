import React from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionSetIndexPage } from 'redux/page/pageActions';
// import { generatePath } from 'react-router-dom';
import { useResolvedPath } from 'react-router-dom';
import MobileFooter from 'components/Layout/MobileFooter/MobileFooter';
import { useLocation } from 'react-router-dom';
import s from './AppMobilePage.module.scss';
import { useEffect } from 'react';
const AppMobilePage = ({ children, page, path }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const resolvedPath = useResolvedPath(location.pathname);
  console.log(resolvedPath);
  // const generatedPath = generatePath("/users/:id", { id: "42" });
  // console.log(generatedPath)
  // console.log(path);

  useEffect(() => {
    dispatch(actionSetIndexPage(path));
  }, [dispatch, path]);

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
