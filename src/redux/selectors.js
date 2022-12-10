export const getPosts = state => state.posts;
export const selectOrders = state => state.orders;
export const selectFilter = state => state.filter;
export const selectUserData = state => state.auth;
export const selectPostsBlock = state => state.posts;
export const getAppSettings = state => state.appSettings;
export const getAppPageSettings = state => state.appPage;
export const getAppNotify = state => state.appNotify;
export const getSearchParams = state => state.appPage.searchParams;
export const getIndexPage = state => state.appPage.indexPage;
export const getDevice = state => {
  return state.appPage.isMobile ? 'mobile' : 'desktop';
};
