import { Suspense, useEffect, useRef } from 'react';
import Layout from './Layout/Layout';
import AppLoader from './AppLoader/AppLoader';
import AppRoutes from './AppRoutes/AppRoutes';
import MyDevice from './DeviceTypeInformer/MyDevice';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getAppSettings } from 'redux/selectors';
import { actionSetDevice } from 'redux/page/pageActions';
import { useMediaQuery } from 'react-responsive';
import { getUserData } from 'redux/selectors';
import { actionSetCurrentUser } from 'redux/auth/authActions';
import { useLocation } from 'react-router-dom';

import s from './App.module.scss';

export const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const locationRef = useRef();

  const { isDarkTheme } = useSelector(getAppSettings);
  const user = useSelector(getUserData);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    dispatch(actionSetDevice(isMobile));
    if (user.token) {
      locationRef.current = location.pathname;
      dispatch(actionSetCurrentUser());
    }
  }, [dispatch, isMobile, location.pathname, user.token]);

  return (
    <div className={[isDarkTheme ? s.appDark : s.app, isDarkTheme ? 'Dark' : 'Light'].join(' ')}>
      <Layout>
        <Suspense fallback={<AppLoader isLoading={true} />}>
          <AppRoutes locationRef={locationRef} />
        </Suspense>
      </Layout>

      <MyDevice />
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        limit={7}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
