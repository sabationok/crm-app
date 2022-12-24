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
    path: 'refunds',
    device: 'desktop',
    iconId: 'refund',
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
    title: 'Довідники',
    path: 'directories',
    device: 'desktop',
    iconId: 'folder',
  },
  {
    title: 'Вендор',
    path: 'vendor',
    device: 'desktop',
    iconId: 'partners',
  },
  {
    title: 'Менеджер',
    path: 'manager',
    device: 'desktop',
    iconId: 'person',
  },
  {
    title: 'Адмін',
    path: 'admin',
    device: 'desktop',
    iconId: 'admin',
  },
];
export const mobilePageRoutes = [
  { title: 'Список завдань', device: 'mobile', parentPath: 'tasks', path: '/tasks', navLink: false, iconId: 'list' },
  { title: 'Деталі завдання', device: 'mobile', parentPath: 'tasks', path: 'task', iconId: 'info' },
  {
    title: 'Сповіщення',
    device: 'mobile',
    parentPath: 'tasks',
    path: 'notifications',
    iconId: 'notifications',
  },

  { title: 'Замовлення', device: 'mobile', parentPath: 'orders', path: '/orders', navLink: false, iconId: 'list' },
  {
    title: 'Деталі замовлення',
    evice: 'mobile',
    parentPath: 'orders',
    path: 'order',
    iconId: 'assignment-in',
  },
  { title: 'Реалізації', device: 'mobile', parentPath: 'orders', path: 'realizations', iconId: 'assignment-ok' },

  { title: 'Список повернень', device: 'mobile', parentPath: 'refunds', path: '/refunds', navLink: false, iconId: 'list' },
  { title: 'Деталі повернення', device: 'mobile', parentPath: 'refunds', path: 'refund', iconId: 'refund' },
  { title: 'Інспекція', device: 'mobile', parentPath: 'refunds', path: 'inspection', iconId: 'inspect' },

  { title: 'Товари', device: 'mobile', parentPath: 'products', path: '/products', navLink: false, iconId: 'list' },
  { title: 'Деталі товару', device: 'mobile', parentPath: 'products', path: 'product', iconId: 'info' },
  { title: 'Залишки', device: 'mobile', parentPath: 'products', path: 'stock', iconId: 'storage' },

  { title: 'Звіти', device: 'mobile', parentPath: 'raports', path: '/raports', navLink: false, iconId: 'list' },
  { title: 'Звіт', device: 'mobile', parentPath: 'raports', path: 'raport', iconId: 'assignment-ok' },
  { title: 'Статистика', device: 'mobile', parentPath: 'raports', path: 'statistics', iconId: 'statistics' },
  { title: 'Проблеми', device: 'mobile', parentPath: 'raports', path: 'problems', iconId: 'warning' },

  { title: 'Контрагенти', device: 'mobile', parentPath: 'counterParty', path: '/counterParty', navLink: false, iconId: 'persons' },
  { title: 'Контрагент', device: 'mobile', parentPath: 'counterAgent', path: 'counterAgent', iconId: 'person' },
  { title: 'Чат', device: 'mobile', parentPath: 'chat', path: 'chat', iconId: 'chat' },

  { title: 'Довідники', device: 'mobile', parentPath: 'directories', path: '/directories', navLink: false, iconId: 'folder' },
  { title: 'Категорії', device: 'mobile', parentPath: 'directories', path: '/categories', iconId: 'folder' },
  { title: 'Інше', device: 'mobile', parentPath: 'directories', path: '/others', iconId: 'folder' },

  { title: 'Профіль', device: 'mobile', parentPath: 'vendor', path: '/vendor', navLink: false, iconId: 'person' },
  { title: 'Бренди', device: 'mobile', parentPath: 'vendor', path: 'brands', iconId: 'brand' },
  { title: 'Налаштування', device: 'mobile', parentPath: 'vendor', path: 'settings', iconId: 'settings' },

  { title: 'Профіль', device: 'mobile', parentPath: 'manager', path: '/manager', navLink: false, iconId: 'person' },
  { title: 'Вендори', device: 'mobile', parentPath: 'manager', path: 'vendors', iconId: 'partners' },
  { title: 'Бренди', device: 'mobile', parentPath: 'manager', path: 'brands', iconId: 'brand' },
  { title: 'Налаштування', device: 'mobile', parentPath: 'manager', path: 'settings', iconId: 'settings' },

  { title: 'Адмін', device: 'mobile', parentPath: 'admin', path: '/admin', navLink: false, iconId: 'admin' },
  { title: 'Менеджери', device: 'mobile', parentPath: 'admin', path: 'managers', iconId: 'persons' },
  { title: 'Вендори', device: 'mobile', parentPath: 'admin', path: 'vendors', iconId: 'partners' },
  { title: 'Права доступу', device: 'mobile', parentPath: 'admin', path: 'roles', iconId: 'lockPerson' },
  { title: 'Налаштування', device: 'mobile', parentPath: 'admin', path: 'settings', iconId: 'settings' },
];
