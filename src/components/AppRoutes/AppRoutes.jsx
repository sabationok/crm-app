import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { pagesRoutes } from 'components/pagesRoutes';
import { MaxTabletRoute, MinTabletXlRoute } from 'components/DeviceTypeInformer/DeviceTypeController';
import { BlocksMap } from 'components/BlocksMap';
import { pagesMapLowerCase } from 'components/PagesMap';
const AppMobilePage = lazy(() => import('components/AppPages/AppMobilePage/AppMobilePage'));
const PageError = lazy(() => import('components/AppPages/PageError/PageError'));
const PageNotFound = lazy(() => import('components/AppPages/PageNotFound/PageNotFound'));

const {
  BlockProductsList,
  BlockProductInfo,
  BlockProductStock,
  BlockOrdersList,
  BlockOrderInfo,
  BlockOrderTTN,
  BlockReturnsList,
  BlockReturnInfo,
  BlockReturnInspection,
  BlockRaportsList,
  BlockRaportInfo,
  BlockStatistics,
  BlockProblems,
  BlockCounterPartysList,
  BlockCounterPartyInfo,
  BlockCounterPartyChat,
  BlockMainTasks,
  BlockMainTask,
  BlockMainNotify,
  BlockAdmin,
  BlockAdminRules,
  BlockManagers,
  BlockVendors,
  BlockSettings,
} = BlocksMap;

const AppRoutes = () => {
  let RoutePage = <></>;
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="desktop" />} errorElement={<PageError />} />
        <Route path="desktop/*" element={<MinTabletXlRoute redirectTo="/mobile" />} errorElement={<PageError />}>
          <Route index element={<Navigate to="tasks" />} errorElement={<PageError />}></Route>
          <Route
            path="*"
            element={pagesRoutes.map(route => {
              RoutePage = pagesMapLowerCase[route.path];

              return (
                <Routes key={route.path}>
                  <Route path={`${route.path}`} element={<RoutePage />}></Route>
                </Routes>
              );
            })}
            errorElement={<PageError />}
          ></Route>
          <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
        </Route>
        <Route path="mobile/*" element={<MaxTabletRoute redirectTo="/desktop" />}>
          <Route index element={<Navigate to="products" />} errorElement={<PageError />} />

          <Route path="products/*" element={<AppMobilePage path="products" />} errorElement={<PageError />}>
            <Route index element={<Navigate to="allProducts" />} errorElement={<PageError />} />
            <Route path="allProducts" element={<BlockProductsList />} errorElement={<PageError />} />
            <Route path="product" element={<BlockProductInfo />} errorElement={<PageError />} />
            <Route path="stock" element={<BlockProductStock />} errorElement={<PageError />} />
            <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
          </Route>

          <Route path="orders/*" element={<AppMobilePage path="orders" />} errorElement={<PageError />}>
            <Route index element={<Navigate to="allOrders" />} errorElement={<PageError />} />
            <Route path="allOrders" element={<BlockOrdersList />} errorElement={<PageError />} />
            <Route path="order" element={<BlockOrderInfo />} errorElement={<PageError />} />
            <Route path="ttn" element={<BlockOrderTTN />} errorElement={<PageError />} />
            <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
          </Route>

          <Route path="returns/*" element={<AppMobilePage path="returns" />} errorElement={<PageError />}>
            <Route index element={<Navigate to="allReturns" />} errorElement={<PageError />} />
            <Route path="allReturns" element={<BlockReturnsList />} errorElement={<PageError />} />
            <Route path="return" element={<BlockReturnInfo />} errorElement={<PageError />} />
            <Route path="inspection" element={<BlockReturnInspection />} errorElement={<PageError />} />
            <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
          </Route>

          <Route path="raports/*" element={<AppMobilePage path="raports" />} errorElement={<PageError />}>
            <Route index element={<Navigate to="allRaports" />} errorElement={<PageError />} />
            <Route path="allRaports" element={<BlockRaportsList />} errorElement={<PageError />} />
            <Route path="raport" element={<BlockRaportInfo />} errorElement={<PageError />} />
            <Route path="statistics" element={<BlockStatistics />} errorElement={<PageError />} />
            <Route path="problems" element={<BlockProblems />} errorElement={<PageError />} />
            <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
          </Route>

          <Route path="counterParty/*" element={<AppMobilePage path="counterParty" />} errorElement={<PageError />}>
            <Route index element={<Navigate to="counterPartysList" />} errorElement={<PageError />} />
            <Route path="allCounterParties" element={<BlockCounterPartysList />} errorElement={<PageError />} />
            <Route path="counterParty" element={<BlockCounterPartyInfo />} errorElement={<PageError />} />
            <Route path="chat" element={<BlockCounterPartyChat />} errorElement={<PageError />} />
            <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
          </Route>

          <Route path="tasks/*" element={<AppMobilePage path="tasks" />} errorElement={<PageError />}>
            <Route index element={<Navigate to="allTasks" />} errorElement={<PageError />} />
            <Route path="allTasks" element={<BlockMainTasks />} errorElement={<PageError />} />
            <Route path="task" element={<BlockMainTask />} errorElement={<PageError />} />
            <Route path="notifications" element={<BlockMainNotify />} errorElement={<PageError />} />
            <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
          </Route>

          <Route path="admin/*" element={<AppMobilePage path="admin" />} errorElement={<PageError />}>
            <Route index element={<Navigate to="app" />} errorElement={<PageError />} />
            <Route path="app" element={<BlockAdmin />} errorElement={<PageError />} />
            <Route path="managers" element={<BlockManagers />} errorElement={<PageError />} />
            <Route path="vendors" element={<BlockVendors />} errorElement={<PageError />} />
            <Route path="roles" element={<BlockAdminRules />} errorElement={<PageError />} />
            <Route path="settings" element={<BlockSettings />} errorElement={<PageError />} />
            <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
          </Route>
          <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;