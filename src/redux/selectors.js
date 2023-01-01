export const getUserData = state => state.auth;
export const getAppSettings = state => state.appSettings;
export const getAppPageSettings = state => state.appPage;
export const getAppNotify = state => state.appNotify;
export const getIndexPage = state => state.appPage.indexPage;
export const getDevice = state => (state.appPage.isMobile ? 'mobile' : 'desktop');
export const getPageObjData = state => state.appPage.pageObjData;

export const getPosts = state => state.posts;
export const getPostById =
  id =>
  ({ posts }) =>
    posts.posts.find(post => post._id === id);

export const getOrders = state => state.orders;
export const getOrderById =
  id =>
  ({ orders }) =>
    orders.orders.find(order => order._id === id);

export const getAllCategories = state => state.categories;

export const getFilter = state => state.filter;
export const getSearchParams = state => state.appPage.searchParams;
