import { Suspense, useEffect, useRef } from 'react';
import Layout from './Layout/Layout';
import AppLoader from './AppLoader/AppLoader';
import AppRoutes from './AppRoutes/AppRoutes';
import MyDevice from './DeviceTypeInformer/MyDevice';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getAppSettings } from 'redux/selectors';
import { useMediaQuery } from 'react-responsive';
import { getUserData } from 'redux/selectors';
import { getCurrentUserThunk } from 'redux/auth/authThunks';
import { baseURL } from 'services/baseApi';

import s from './App.module.scss';

export const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector(getUserData);
  const locationRef = useRef();
  const { isDarkTheme } = useSelector(getAppSettings);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    if (auth.token && window.location.hostname !== 'localhost') {
      dispatch(getCurrentUserThunk());
    }

    // if (auth.token) {
    //   dispatch(getCurrentUserThunk());
    // }

    if (window.location.hostname !== 'localhost') {
      baseURL.setRailWay();
    }
  }, [dispatch, isMobile, auth.token]);

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
