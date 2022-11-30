export const pagesRoutes = [
  {
    title: 'Головна',
    path: 'tasks',
    device: 'desktop',
    iconId: 'home',
  },
  {
    title: 'Замовлення',
    path: 'orders',
    device: 'desktop',
    iconId: 'addtoCart',
  },
  {
    title: 'Повернення',
    path: 'returns',
    device: 'desktop',
    iconId: 'return',
  },
  {
    title: 'Товари',
    path: 'products',
    device: 'desktop',
    iconId: 'storage',
  },
  {
    title: 'Звіти',
    path: 'raports',
    device: 'desktop',
    iconId: 'assignment-ok',
  },
  {
    title: 'Контрагенти',
    path: 'counterParty',
    device: 'desktop',
    iconId: 'persons',
  },
  {
    title: 'Адмін панель',
    path: 'admin',
    device: 'desktop',
    iconId: 'admin',
  },
];
export const mobilePageRoutes = [
  { title: 'Список завдань', device: 'mobile', parentPath: 'tasks', path: 'allTasks', iconId: 'list' },
  { title: 'Деталі завдання', device: 'mobile', parentPath: 'tasks', path: 'task', iconId: 'info' },
  {
    title: 'Сповіщення',
    device: 'mobile',
    parentPath: 'tasks',
    path: 'notifications',
    iconId: 'notifications',
  },

  { title: 'Замовлення', device: 'mobile', parentPath: 'orders', path: 'list', iconId: 'list' },
  {
    title: 'Деталі замовлення',
    evice: 'mobile',
    parentPath: 'orders',
    path: 'order',
    iconId: 'assignment-ok',
  },
  { title: 'ТТН', device: 'mobile', parentPath: 'orders', path: 'ttn', iconId: 'ttn' },

  { title: 'Список повернень', device: 'mobile', parentPath: 'returns', path: 'allReturns', iconId: 'list' },
  { title: 'Деталі повернення', device: 'mobile', parentPath: 'returns', path: 'return', iconId: 'return' },
  { title: 'Інспекція', device: 'mobile', parentPath: 'returns', path: 'inspection', iconId: 'inspect' },

  { title: 'Товари', device: 'mobile', parentPath: 'products', path: 'allProducts', iconId: 'list' },
  { title: 'Деталі товару', device: 'mobile', parentPath: 'products', path: 'product', iconId: 'info' },
  { title: 'Залишки', device: 'mobile', parentPath: 'products', path: 'stock', iconId: 'storage' },

  { title: 'Звіти', device: 'mobile', parentPath: 'raports', path: 'allRaports', iconId: 'list' },
  { title: 'Звіт', device: 'mobile', parentPath: 'raports', path: 'raport', iconId: 'assignment-ok' },
  { title: 'Статистика', device: 'mobile', parentPath: 'raports', path: 'statistics', iconId: 'statistics' },
  { title: 'Проблеми', device: 'mobile', parentPath: 'raports', path: 'problems', iconId: 'warning' },

  { title: 'Контрагенти', device: 'mobile', parentPath: 'counterParty', path: 'allCounterParty', iconId: 'persons' },
  { title: 'Контрагент', device: 'mobile', parentPath: 'counterParty', path: 'counterParty', iconId: 'person' },
  { title: 'Чат', device: 'mobile', parentPath: 'counterParty', path: 'chat', iconId: 'chat' },

  { title: 'Загальні', device: 'mobile', parentPath: 'settings', path: 'app', iconId: 'settings' },
  { title: 'Довідники', device: 'mobile', parentPath: 'settings', path: 'global', iconId: 'settings' },
  { title: 'Інше', device: 'mobile', parentPath: 'settings', path: 'others', iconId: 'settings' },

  { title: 'Адмін', device: 'mobile', parentPath: 'admin', path: 'app', iconId: 'admin' },
  { title: 'Менеджери', device: 'mobile', parentPath: 'admin', path: 'managers', iconId: 'persons' },
  { title: 'Вендори', device: 'mobile', parentPath: 'admin', path: 'vendors', iconId: 'persons' },
  { title: 'Права доступу', device: 'mobile', parentPath: 'admin', path: 'roles', iconId: 'admin' },
];
