import { Routes, Route, Navigate } from 'react-router-dom';
import { pagesRoutes } from 'components/pagesRoutes';
import { MaxTabletRoute, MinTabletXlRoute } from 'components/DeviceTypeInformer/DeviceTypeController';
import { BlocksMap } from 'components/BlocksMap';
import { pagesMapLowerCase } from 'components/PagesMap';
import { lazy } from 'react';

const AppMobilePage = lazy(() => import('components/AppPages/AppMobilePage/AppMobilePage'));
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
        <Route index element={<Navigate to="desktop" />} />
        <Route path="desktop/*" element={<MinTabletXlRoute redirectTo="/mobile" />}>
          <Route index element={<Navigate to="tasks" />}></Route>
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
          ></Route>
        </Route>
        <Route path="mobile/*" element={<MaxTabletRoute redirectTo="/desktop" />}>
          <Route index element={<Navigate to="products" />} />

          <Route path="products/*" element={<AppMobilePage path="products" />}>
            <Route index element={<Navigate to="allProducts" />} />
            <Route path="allProducts" element={<BlockProductsList />} />
            <Route path="product" element={<BlockProductInfo />} />
            <Route path="stock" element={<BlockProductStock />} />
          </Route>

          <Route path="orders/*" element={<AppMobilePage path="orders" />}>
            <Route index element={<Navigate to="allOrders" />} />
            <Route path="allOrders" element={<BlockOrdersList />} />
            <Route path="order" element={<BlockOrderInfo />} />
            <Route path="ttn" element={<BlockOrderTTN />} />
          </Route>

          <Route path="returns/*" element={<AppMobilePage path="returns" />}>
            <Route index element={<Navigate to="allReturns" />} />
            <Route path="allReturns" element={<BlockReturnsList />} />
            <Route path="return" element={<BlockReturnInfo />} />
            <Route path="inspection" element={<BlockReturnInspection />} />
          </Route>

          <Route path="raports/*" element={<AppMobilePage path="raports" />}>
            <Route index element={<Navigate to="allRaports" />} />
            <Route path="allRaports" element={<BlockRaportsList />} />
            <Route path="raport" element={<BlockRaportInfo />} />
            <Route path="statistics" element={<BlockStatistics />} />
            <Route path="problems" element={<BlockProblems />} />
          </Route>

          <Route path="counterParty/*" element={<AppMobilePage path="counterParty" />}>
            <Route index element={<Navigate to="counterPartysList" />} />
            <Route path="allCounterParties" element={<BlockCounterPartysList />} />
            <Route path="counterParty" element={<BlockCounterPartyInfo />} />
            <Route path="chat" element={<BlockCounterPartyChat />} />
          </Route>

          <Route path="tasks/*" element={<AppMobilePage path="tasks" />}>
            <Route index element={<Navigate to="allTasks" />} />
            <Route path="allTasks" element={<BlockMainTasks />} />
            <Route path="task" element={<BlockMainTask />} />
            <Route path="notifications" element={<BlockMainNotify />} />
          </Route>

          <Route path="admin/*" element={<AppMobilePage path="admin" />}>
            <Route index element={<Navigate to="app" />} />
            <Route path="app" element={<BlockAdmin />} />
            <Route path="managers" element={<BlockManagers />} />
            <Route path="vendors" element={<BlockVendors />} />
            <Route path="roles" element={<BlockAdminRules />} />
            <Route path="settings" element={<BlockSettings />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
