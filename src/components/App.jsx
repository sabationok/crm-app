import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';

import AppLoader from './AppLoader/AppLoader';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getAppSettings } from 'redux/selectors';

import DeviceTypeInformer from './DeviceTypeInformer/DeviceTypeInformer';

import s from './App.module.scss';

const PageMain = lazy(() => import('./Pages/PageMain/PageMain'));
const PageNotFound = lazy(() => import('./Pages/PageNotFound/PageNotFound'));
const PageLogOut = lazy(() => import('./Pages/PageLogOut/PageLogOut'));
const PageProducts = lazy(() => import('./Pages/PageProducts/PageProducts'));
const PageOrders = lazy(() => import('./Pages/PageOrders/PageOrders'));
const PageReturns = lazy(() => import('./Pages/PageReturns/PageReturns'));
const PageCounterParty = lazy(() => import('./Pages/PageCounterParty/PageCounterParty'));
const PageSettings = lazy(() => import('./Pages/PageSettings/PageSettings'));
const PageStatistics = lazy(() => import('./Pages/PageStatistics/PageStatistics'));
const PageAdmin = lazy(() => import('./Pages/PageAdmin/PageAdmin'));

export const App = () => {
  const { isDarkTheme } = useSelector(getAppSettings);

  return (
    <div className={isDarkTheme ? s.appDark : s.app}>
      <Layout>
        <Suspense fallback={<AppLoader isLoading={true} />}>
          <Routes>
            <Route index element={<PageProducts />} />
            <Route path="main" element={<PageMain />} />
            <Route path="products" element={<PageProducts />} />
            <Route path="orders" element={<PageOrders />} />
            <Route path="returns" element={<PageReturns />} />
            <Route path="statistics" element={<PageStatistics />} />
            <Route path="counterParty" element={<PageCounterParty />} />
            <Route path="settings" element={<PageSettings />} />
            <Route path="admin" element={<PageAdmin />} />
            <Route path="logOut" element={<PageLogOut />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Layout>
      <DeviceTypeInformer />
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
