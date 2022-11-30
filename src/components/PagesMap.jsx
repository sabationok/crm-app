import { lazy } from 'react';
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

export let PagesMap = {
  Main: PageMain,
  Admin: PageAdmin,
  Raports: PageStatistics,
  Settings: PageSettings,
  CounterParty: PageCounterParty,
  Returns: PageReturns,
  Orders: PageOrders,
  Products: PageProducts,
  LogOut: PageLogOut,
  NotFound: PageNotFound,
  Error: PageError,
};
export let pagesMapLowerCase = {
  tasks: PageMain,
  admin: PageAdmin,
  raports: PageStatistics,
  settings: PageSettings,
  counterParty: PageCounterParty,
  returns: PageReturns,
  orders: PageOrders,
  products: PageProducts,
  logOut: PageLogOut,
  notFound: PageNotFound,
  error: PageError,
};
