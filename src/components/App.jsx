import { Suspense } from 'react';
import Layout from './Layout/Layout';
import AppLoader from './AppLoader/AppLoader';
import AppRoutes from './AppRoutes/AppRoutes';
import MyDevice from './DeviceTypeInformer/MyDevice';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getAppSettings } from 'redux/selectors';

import s from './App.module.scss';

export const App = () => {
  const { isDarkTheme } = useSelector(getAppSettings);

  return (
    <div className={isDarkTheme ? s.appDark : s.app}>
      <Layout>
        <Suspense fallback={<AppLoader isLoading={true} />}>
          <AppRoutes />
        </Suspense>
      </Layout>

      <MyDevice />
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        limit={3}
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
