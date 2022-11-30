import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './Layout/Layout';

import AppLoader from './AppLoader/AppLoader';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getAppSettings } from 'redux/selectors';
import { MinTabletXlRoute, MaxTabletRoute } from './DeviceTypeInformer/DeviceTypeController';

import DeviceTypeInformer from './DeviceTypeInformer/DeviceTypeInformer';

import s from './App.module.scss';

import { BlockProductsList, BlockProductInfo, BlockProductStock } from 'components/Blocks/ProductBlocks';
import { BlockOrdersList, BlockOrderInfo, BlockOrderTTN } from 'components/Blocks/OrderBlocks';
import { BlockReturnsList, BlockReturnInfo, BlockReturnInspection } from 'components/Blocks/ReturnBlocks';
import { BlockRaportsList, BlockRaportInfo, BlockStatistics, BlockProblems } from 'components/Blocks/RaportBlocks';
import {
  BlockCounterPartysList,
  BlockCounterPartyInfo,
  BlockCounterPartyChat,
} from 'components/Blocks/CounterPartyBlocks';
import { BlockMainTasks, BlockMainTask, BlockMainNotify } from 'components/Blocks/MainBlocks';
import { BlockAdmin, BlockAdminRules } from 'components/Blocks/AdminBlocks';
import BlockSettings from './Blocks/SettingsBlocks';

const PageMain = lazy(() => import('./AppPages/PageMain/PageMain'));
const AppMobilePage = lazy(() => import('./AppPages/AppMobilePage/AppMobilePage'));
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
            <Route index element={<AppMobilePage />} />
            <Route path="/*" element={<AppMobilePage />}>
              <Route path="main/*">
                
                <Route index element={<Navigate to="/main/tasks" />} />
                <Route path="tasks" element={<BlockMainTasks />} />
                <Route path="task" element={<BlockMainTask />} />
                <Route path="notifications" element={<BlockMainNotify />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
              <Route path="products/*">
                <Route index element={<Navigate to="/products/list" />} />
                <Route path="list" element={<BlockProductsList />} />
                <Route path="product" element={<BlockProductInfo />} />
                <Route path="stock" element={<BlockProductStock />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
              <Route path="returns/*">
                <Route index element={<Navigate to="/returns/list" />} />
                <Route path="list" element={<BlockReturnsList />} />
                <Route path="return" element={<BlockReturnInfo />} />
                <Route path="inspection" element={<BlockReturnInspection />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
              <Route path="orders/*">
                <Route index element={<Navigate to="/orders/list" />} />
                <Route path="list" element={<BlockOrdersList />} />
                <Route path="order" element={<BlockOrderInfo />} />
                <Route path="ttn" element={<BlockOrderTTN />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
              <Route path="orders/*">
                <Route index element={<Navigate to="/orders/list" />} />
                <Route path="list" element={<BlockOrdersList />} />
                <Route path="order" element={<BlockOrderInfo />} />
                <Route path="ttn" element={<BlockOrderTTN />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
              <Route path="raports/*">
                <Route index element={<Navigate to="/raports/list" />} />
                <Route path="list" element={<BlockRaportsList />} />
                <Route path="raport" element={<BlockRaportInfo />} />
                <Route path="problems" element={<BlockProblems />} />
                <Route path="statistics" element={<BlockStatistics />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
              <Route path="counterParty/*">
                <Route index element={<Navigate to="/counterParty/list" />} />
                <Route path="list" element={<BlockCounterPartysList />} />
                <Route path="info" element={<BlockCounterPartyInfo />} />
                <Route path="chat" element={<BlockCounterPartyChat />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
              <Route path="admin/*">
                <Route index element={<Navigate to="/admin/main" />} />
                <Route path="main" element={<BlockAdmin />} />
                <Route path="roles" element={<BlockAdminRules />} />

                <Route path="*" element={<PageNotFound />} />
              </Route>
              <Route path="settings/*">
                <Route index element={<Navigate to="/settings/app" />} />
                <Route path="app" element={<BlockSettings />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
              {/* <Route path="/*" element={<MaxTabletRoute redirectTo="/main" />}></Route> */}

              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route index element={<Navigate to="/main" />} />
            <Route path="main" element={<PageMain />} />
            <Route path="products" element={<PageProducts />} />
            <Route path="orders" element={<PageOrders />} />
            <Route path="returns" element={<PageReturns />} />
            <Route path="raports" element={<PageStatistics />} />
            <Route path="counterParty" element={<PageCounterParty />} />
            <Route path="settings" element={<PageSettings />} />
            <Route path="admin" element={<PageAdmin />} />
            <Route path="*" element={<PageNotFound />} />
            {/* <Route path="/*" element={<MinTabletXlRoute redirectTo="/main/tasks" />}></Route> */}
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
