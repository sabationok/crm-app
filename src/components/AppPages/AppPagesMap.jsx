import { lazy } from 'react';
const PageMain = lazy(() => import('./PageMain'));
const PageNotFound = lazy(() => import('./PageNotFound/PageNotFound'));
const PageError = lazy(() => import('./PageError/PageError'));
const PageLogOut = lazy(() => import('./PageLogOut/PageLogOut'));
const PageProducts = lazy(() => import('./PageProducts'));
const PageOrders = lazy(() => import('./PageOrders'));
const PageReturns = lazy(() => import('./PageReturns'));
const PageCounterParty = lazy(() => import('./PageCounterParty'));
const PageDirectories = lazy(() => import('./PageDirectories'));
const PageStatistics = lazy(() => import('./PageStatistics'));
const PageManager = lazy(() => import('./PageManager'));
const PageVendor = lazy(() => import('./PageVendor'));
const PageAdmin = lazy(() => import('./PageAdmin'));
const AppMobilePage = lazy(() => import('./AppMobilePage/AppMobilePage'));
export const AppPages = {
  PageMain,
  PageNotFound,
  PageError,
  PageLogOut,
  PageProducts,
  PageOrders,
  PageReturns,
  PageCounterParty,
  PageDirectories,
  PageStatistics,
  PageAdmin,
  AppMobilePage,
  PageVendor,
  PageManager,
};
// export let PagesMap = {
//   Main: PageMain,
//   Admin: PageAdmin,
//   Raports: PageStatistics,
//   Settings: PageSettings,
//   CounterParty: PageCounterParty,
//   Returns: PageReturns,
//   Orders: PageOrders,
//   Products: PageProducts,
//   Manager: PageManager,
//   Vendor: PageVendor,
//   LogOut: PageLogOut,
//   NotFound: PageNotFound,
//   Error: PageError,
//   Mobile: AppMobilePage,
// };
// export let pagesMapLowerCase = {
//   tasks: PageMain,
//   admin: PageAdmin,
//   raports: PageStatistics,
//   directories: PageDirectories,
//   counterParty: PageCounterParty,
//   returns: PageReturns,
//   orders: PageOrders,
//   products: PageProducts,
//   manager: PageManager,
//   vendor: PageVendor,
//   logOut: PageLogOut,
//   notFound: PageNotFound,
//   error: PageError,
//   mobile: AppMobilePage,
// };
