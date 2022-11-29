import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';

import AppLoader from './AppLoader/AppLoader';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getAppSettings } from 'redux/selectors';
import { MinTabletXlRoute, MaxTabletRoute } from './DeviceTypeInformer/DeviceTypeController';

import DeviceTypeInformer from './DeviceTypeInformer/DeviceTypeInformer';

import s from './App.module.scss';

import AppMobilePage from './AppPages/AppMobilePage/AppMobilePage';

const PageMain = lazy(() => import('./AppPages/PageMain/PageMain'));
const PageNotFound = lazy(() => import('./AppPages/PageNotFound/PageNotFound'));
const PageError = lazy(() => import('./AppPages/PageError/PageError'));
const PageLogOut = lazy(() => import('./AppPages/PageLogOut/PageLogOut'));
const PageProducts = lazy(() => import('./AppPages/PageProducts/PageProducts'));
const PageOrders = lazy(() => import('./AppPages/PageOrders/PageOrders'));
const PageReturns = lazy(() => import('./AppPages/PageReturns/PageReturns'));
const PageCounterParty = lazy(() => import('./AppPages/PageCounterParty/PageCounterParty'));
const PageSettings = lazy(() => import('./AppPages/PageSettings/PageSettings'));
const PageStatistics = lazy(() => import('./AppPages/PageStatistics/PageStatistics'));
const PageAdmin = lazy(() => import('./AppPages/PageAdmin/PageAdmin'));

export const App = () => {
  const { isDarkTheme } = useSelector(getAppSettings);

  return (
    <div className={isDarkTheme ? s.appDark : s.app}>
      <Layout>
        <Suspense fallback={<AppLoader isLoading={true} />}>
          <Routes>
            <Route path="mobile/*" element={<MaxTabletRoute redirectTo="/main" />}>
              <Route index element={<AppMobilePage />}></Route>
              <Route path="main" element={<AppMobilePage />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="/*" element={<MinTabletXlRoute redirectTo="mobile/main" />}>
              <Route index element={<PageProducts />} />
              <Route path="main" element={<PageMain />} />
              <Route path="products" element={<PageProducts />} />
              <Route path="orders" element={<PageOrders />} />
              <Route path="returns" element={<PageReturns />} />
              <Route path="statistics" element={<PageStatistics />} />
              <Route path="counterParty" element={<PageCounterParty />} />
              <Route path="settings" element={<PageSettings />} />
              <Route path="admin" element={<PageAdmin />} />
            </Route>
            <Route path="logOut" element={<PageLogOut />} />
            <Route path="error" element={<PageError />} />
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
