import { lazy } from 'react';
const PageMain = lazy(() => import('./PageMain/PageMain'));
const PageNotFound = lazy(() => import('./PageNotFound/PageNotFound'));
const PageError = lazy(() => import('./PageError/PageError'));
const PageLogOut = lazy(() => import('./PageLogOut/PageLogOut'));
const PageProducts = lazy(() => import('./PageProducts/PageProducts'));
const PageOrders = lazy(() => import('./PageOrders/PageOrders'));
const PageReturns = lazy(() => import('./PageReturns/PageReturns'));
const PageCounterParty = lazy(() => import('./PageCounterParty/PageCounterParty'));
const PageSettings = lazy(() => import('./PageSettings/PageSettings'));
const PageStatistics = lazy(() => import('./PageStatistics/PageStatistics'));
const PageAdmin = lazy(() => import('./PageAdmin/PageAdmin'));
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
  PageSettings,
  PageStatistics,
  PageAdmin,
  AppMobilePage,
};
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
  Mobile: AppMobilePage,
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
  mobile: AppMobilePage,
};
