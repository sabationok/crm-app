import { Suspense, useEffect, useRef } from 'react';
import Layout from './Layout/Layout';
import AppLoader from './AppLoader/AppLoader';
import AppRoutes from './AppRoutes/AppRoutes';
import MyDevice from './DeviceTypeInformer/MyDevice';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getAppSettings } from 'redux/selectors';
import { useMediaQuery } from 'react-responsive';
import { getUserData } from 'redux/selectors';
import { getCurrentUserThunk } from 'redux/auth/auth.thunks';
import { baseURL } from 'services/baseApi';

import s from './App.module.scss';

export const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector(getUserData);
  const { isDarkTheme } = useSelector(getAppSettings);
  const locationRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const payload = {
      submitData: {},
      onSuccess: _data => {},
      onError: error => {
        console.log(error);
        toast.error(`${error?.message}`);
      },
    };
    if (window.location.hostname !== 'localhost') {
      baseURL.setRailWay();
    }

    if (auth.token && window.location.hostname !== 'localhost') {
      dispatch(getCurrentUserThunk(payload));
    }
  }, [dispatch, isMobile, auth.token]);

  useEffect(() => {
    const body = document.querySelector('body');

    if (isDarkTheme) {
      body.classList.remove('Light');
      body.classList.add('Dark');
      return;
    }
    if (!isDarkTheme) {
      body.classList.remove('Dark');
      body.classList.add('Light');
      return;
    }
  }, [isDarkTheme]);

  return (
    <div className={isDarkTheme ? s.appDark : s.app}>
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
