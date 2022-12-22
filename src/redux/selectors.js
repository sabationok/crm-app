export const getUserData = state => state.auth;
export const getAppSettings = state => state.appSettings;
export const getAppPageSettings = state => state.appPage;
export const getAppNotify = state => state.appNotify;
export const getIndexPage = state => state.appPage.indexPage;
export const getDevice = state => {
  return state.appPage.isMobile ? 'mobile' : 'desktop';
};

export const getPosts = state => state.posts;
export const getSelectedPost = state => state.posts.posts.find(post => post._id === state.posts.selectedPostId);

export const getOrders = state => state.orders;

export const getFilter = state => state.filter;
export const getPostsBlock = state => state.posts;

export const getSearchParams = state => state.appPage.searchParams;
