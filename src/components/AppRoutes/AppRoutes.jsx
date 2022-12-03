import { Routes, Route, Navigate } from 'react-router-dom';
import { MaxTabletRoute } from 'components/DeviceTypeInformer/DeviceTypeController';
import AppGridPage from 'components/AppPages/AppGridPage/AppGridPage';
import { BlocksMap } from 'components/Blocks/BlocksMap';
import { AppPages } from 'components/AppPages/AppPagesMap';

import MobileFooter from 'components/Layout/MobileFooter/MobileFooter';
import DesktopFooter from 'components/Layout/DesktopFooter/DesktopFooter';


import PageVendor from 'components/AppPages/PageVendor';
const { PageError, PageNotFound, PageMain, PageProducts, PageOrders, PageReturns, PageStatistics, PageAdmin } = AppPages;
const {
  // BlockProductsList,
  BlockProductInfo,
  BlockProductStock,
  // BlockOrdersList,
  BlockOrderInfo,
  BlockOrderTTN,
  // BlockReturnsList,
  BlockReturnInfo,
  BlockReturnInspection,
  // BlockRaportsList,
  BlockRaportInfo,
  BlockStatistics,
  // BlockProblems,
  // BlockCounterPartysList,
  // BlockCounterPartyInfo,
  // BlockCounterPartyChat,
  // BlockMainTasks,
  // BlockMainTask,
  // BlockMainNotify,
  // BlockSettings,
  // BlockDirectories,
  // BlockSetProfile,
  // BlockAdmin,
  BlockManagers,
  BlockVendors,
  BlockAdminRules,
  BlockAdminSettings,
} = BlocksMap;

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="products" />} errorElement={<PageError />} />

        <Route path="tasks" element={<PageMain />} errorElement={<PageError />} />

        <Route path="tasks" element={<AppGridPage path="tasks" />} errorElement={<PageError />}>
          <Route index element={<PageProducts />} errorElement={<PageError />}></Route>
          <Route path="*" element={<MaxTabletRoute redirectTo="/tasks" />} errorElement={<PageError />}>
            <Route index element={<PageProducts />} errorElement={<PageError />} />
            <Route path="task" element={<BlockProductInfo />} errorElement={<PageError />} />
            <Route path="task:id" element={<BlockProductInfo />} errorElement={<PageError />} />
            <Route path="chat" element={<BlockProductStock />} errorElement={<PageError />} />
            <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
          </Route>
          <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
        </Route>

        <Route path="products" element={<AppGridPage path="products" />} errorElement={<PageError />}>
          <Route index element={<PageProducts />} errorElement={<PageError />}></Route>
          <Route path="*" element={<MaxTabletRoute redirectTo="/products" />} errorElement={<PageError />}>
            <Route index element={<PageProducts />} errorElement={<PageError />} />
            <Route path="product" errorElement={<PageError />}>
              <Route index element={<BlockProductInfo />} errorElement={<PageError />} />
              <Route path=":id" element={<BlockProductInfo />} errorElement={<PageError />} />
              <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
            </Route>
            <Route path="stock" element={<BlockProductStock />} errorElement={<PageError />} />
            <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
          </Route>
          <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
        </Route>

        <Route path="orders" element={<AppGridPage path="orders" />} errorElement={<PageError />}>
          <Route index element={<PageOrders />} errorElement={<PageError />}></Route>

          <Route path="*" element={<MaxTabletRoute redirectTo="/orders" />} errorElement={<PageError />}>
            <Route index element={<PageOrders />} errorElement={<PageError />} />
            <Route path="order" element={<BlockOrderInfo />} errorElement={<PageError />} />
            <Route path="order:id" element={<BlockOrderInfo />} errorElement={<PageError />} />
            <Route path="ttn" element={<BlockOrderTTN />} errorElement={<PageError />} />
            <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
          </Route>
          <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
        </Route>

        <Route path="returns" element={<AppGridPage path="returns" />} errorElement={<PageError />}>
          <Route index element={<PageReturns />} errorElement={<PageError />}></Route>
          <Route path="*" element={<MaxTabletRoute redirectTo="/returns" />} errorElement={<PageError />}>
            <Route index element={<PageReturns />} errorElement={<PageError />} />
            <Route path="return" element={<BlockReturnInfo />} errorElement={<PageError />} />
            <Route path="return:id" element={<BlockReturnInfo />} errorElement={<PageError />} />
            <Route path="inspection" element={<BlockReturnInspection />} errorElement={<PageError />} />
            <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
          </Route>
          <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
        </Route>

        <Route path="admin" element={<AppGridPage path="admin" />} errorElement={<PageError />}>
          <Route index element={<PageAdmin />} errorElement={<PageError />}></Route>

          <Route path="*" element={<MaxTabletRoute redirectTo="/admin" />} errorElement={<PageError />}>
            <Route index element={<PageAdmin />} errorElement={<PageError />} />
            <Route path="managers" element={<BlockManagers />} errorElement={<PageError />} />
            <Route path="vendors" element={<BlockVendors />} errorElement={<PageError />} />
            <Route path="roles" element={<BlockAdminRules />} errorElement={<PageError />} />
            <Route path="settings" element={<BlockAdminSettings />} errorElement={<PageError />} />
            <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
          </Route>
          <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
        </Route>

        <Route path="vendor" element={<AppGridPage path="vendor" />} errorElement={<PageError />}>
          <Route index element={<PageVendor />} errorElement={<PageError />}></Route>
          <Route path="*" element={<MaxTabletRoute redirectTo="/vendor" />} errorElement={<PageError />}>
            <Route index element={<PageVendor />} errorElement={<PageError />} />
            <Route path="brands" element={<BlockReturnInfo />} errorElement={<PageError />} />
            <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
          </Route>
          <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
        </Route>

        <Route path="raports" element={<AppGridPage path="raports" />} errorElement={<PageError />}>
          <Route index element={<PageStatistics />} errorElement={<PageError />}></Route>
          <Route path="*" element={<MaxTabletRoute redirectTo="/raports" />} errorElement={<PageError />}>
            <Route index element={<PageStatistics />} errorElement={<PageError />} />
            <Route path="raport" element={<BlockRaportInfo />} errorElement={<PageError />} />
            <Route path="statictics" element={<BlockStatistics />} errorElement={<PageError />} />
            <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
          </Route>
          <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
        </Route>

        <Route
          path="*"
          element={
            <PageNotFound>
              <MobileFooter />
              <DesktopFooter />
            </PageNotFound>
          }
          errorElement={<PageError />}
        />
        {/* <Route path="desktop/*" element={<MinTabletXlRoute redirectTo="/mobile" />} errorElement={<PageError />}>
          <Route index element={<Navigate to={indexPage} />} errorElement={<PageError />}></Route>
          <Route path="tasks" element={<PageMain />} errorElement={<PageError />} />
          <Route path="products" element={<PageProducts />} errorElement={<PageError />} />
          <Route path="orders" element={<PageOrders />} errorElement={<PageError />} />
          <Route path="returns" element={<PageReturns />} errorElement={<PageError />} />
          <Route path="counterParty" element={<PageCounterParty />} errorElement={<PageError />} />
          <Route path="settings" element={<PageSettings />} errorElement={<PageError />} />
          <Route path="raports" element={<PageStatistics />} errorElement={<PageError />} />
          <Route path="admin" element={<PageAdmin path="admin" />} errorElement={<PageError />} />
          <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
        </Route> */}

        {/* <Route path="mobile/*" element={<MaxTabletRoute redirectTo="/desktop" />}>
          <Route index element={<Navigate to={indexPage} />} errorElement={<PageError />} />
          <Route path="tasks/*" element={<AppMobilePage path="tasks" />} errorElement={<PageError />}>
            <Route index element={<Navigate to="allTasks" />} errorElement={<PageError />} />
            <Route path="allTasks" element={<BlockMainTasks />} errorElement={<PageError />} />
            <Route path="task" element={<BlockMainTask />} errorElement={<PageError />} />
            <Route path="notifications" element={<BlockMainNotify />} errorElement={<PageError />} />
            <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
          </Route>

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
            <Route index element={<Navigate to="counterPartiesList" />} errorElement={<PageError />} />
            <Route path="counterPartiesList" element={<BlockCounterPartysList />} errorElement={<PageError />} />
            <Route path="counterAgent" element={<BlockCounterPartyInfo />} errorElement={<PageError />} />
            <Route path="chat" element={<BlockCounterPartyChat />} errorElement={<PageError />} />
            <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
          </Route>

          <Route path="admin/*" element={<AppMobilePage path="admin" />} errorElement={<PageError />}>
            <Route index element={<Navigate to="app" />} errorElement={<PageError />} />
            <Route path="app" element={<BlockAdmin />} errorElement={<PageError />} />
            <Route path="managers" element={<BlockManagers />} errorElement={<PageError />} />
            <Route path="vendors" element={<BlockVendors />} errorElement={<PageError />} />
            <Route path="roles" element={<BlockAdminRules />} errorElement={<PageError />} />
            <Route path="adminSettings" element={<BlockAdminSettings />} errorElement={<PageError />} />
            <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
          </Route>

          <Route path="settings/*" element={<AppMobilePage path="settings" />} errorElement={<PageError />}>
            <Route index element={<Navigate to="settings" />} errorElement={<PageError />} />
            <Route path="settings" element={<BlockSettings />} errorElement={<PageError />} />
            <Route path="directories" element={<BlockDirectories />} errorElement={<PageError />} /> ,
            <Route path="setProfile" element={<BlockSetProfile />} errorElement={<PageError />} />
            ,
            <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
          </Route>

          <Route path="*" element={<AppMobilePage path="/" />} errorElement={<PageError />}>
            <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
          </Route>
        </Route> */}
      </Routes>
    </>
  );
};

export default AppRoutes;
