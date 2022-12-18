import { Suspense, useEffect } from 'react';
import Layout from './Layout/Layout';
import AppLoader from './AppLoader/AppLoader';
import AppRoutes from './AppRoutes/AppRoutes';
import MyDevice from './DeviceTypeInformer/MyDevice';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getAppSettings } from 'redux/selectors';
import { actionSetDevice } from 'redux/page/pageActions';
import { useMediaQuery } from 'react-responsive';

import s from './App.module.scss';

export const App = () => {
  const dispatch = useDispatch();
  const { isDarkTheme } = useSelector(getAppSettings);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    dispatch(actionSetDevice(isMobile));
  }, [dispatch, isMobile]);

  return (
    <div className={[isDarkTheme ? s.appDark : s.app, isDarkTheme ? 'Dark' : 'Light'].join(' ')}>
      <Layout>
        <Suspense fallback={<AppLoader isLoading={true} />}>
          <AppRoutes />
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
