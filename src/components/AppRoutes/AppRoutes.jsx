import { Routes, Route, Navigate } from 'react-router-dom';
import { MaxTabletRoute } from 'components/DeviceTypeInformer/DeviceTypeController';
import AppGridPage from 'components/AppPages/AppGridPage/AppGridPage';

import { AppPages } from 'components/AppPages/AppPagesMap';

import MobileFooter from 'components/Layout/MobileFooter/MobileFooter';
import DesktopFooter from 'components/Layout/DesktopFooter/DesktopFooter';

const { PageError, PageNotFound, PageMain, PageProducts, PageOrders, PageRefunds, PageAdmin } = AppPages;

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="products" />} errorElement={<PageError />} />

        <Route path="tasks" element={<PageMain />} errorElement={<PageError />} />

        <Route path="products" element={<AppGridPage path="products" />} errorElement={<PageError />}>
          <Route index element={<PageProducts />} errorElement={<PageError />}></Route>
          <Route path="products" element={<PageProducts path="products" />} errorElement={<PageError />} />
          <Route path="product" element={<PageProducts path="product" />} errorElement={<PageError />} />
          <Route path="stock" element={<PageProducts path="stock" />} errorElement={<PageError />} />
          <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
        </Route>

        <Route path="orders" element={<AppGridPage path="orders" />} errorElement={<PageError />}>
          <Route index element={<PageOrders />} errorElement={<PageError />}></Route>
          <Route path="orders" element={<PageOrders path="orders" />} errorElement={<PageError />} />
          <Route path="order" element={<PageOrders path="order" />} errorElement={<PageError />} />
          <Route path="ttn" element={<PageOrders path="ttn" />} errorElement={<PageError />} />
          <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
        </Route>

        <Route path="refunds" element={<AppGridPage path="refunds" />} errorElement={<PageError />}>
          <Route index element={<PageRefunds />} errorElement={<PageError />}></Route>
          <Route path="refunds" element={<PageRefunds path="refunds" />} errorElement={<PageError />} />
          <Route path="refund" element={<PageRefunds path="refund" />} errorElement={<PageError />} />
          <Route path="inspect" element={<PageRefunds path="inspect" />} errorElement={<PageError />} />
          <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
        </Route>

        <Route path="admin" element={<AppGridPage path="admin" />} errorElement={<PageError />}>
          <Route index element={<PageAdmin />} errorElement={<PageError />}></Route>
          <Route path="managers" element={<PageAdmin path="managers" />} errorElement={<PageError />} />
          <Route path="vendors" element={<PageAdmin path="vendors" />} errorElement={<PageError />} />
          <Route path="roles" element={<PageAdmin path="roles" />} errorElement={<PageError />} />
          <Route path="settings" element={<PageAdmin path="settings" />} errorElement={<PageError />} />
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
      </Routes>
    </>
  );
};

export default AppRoutes;
