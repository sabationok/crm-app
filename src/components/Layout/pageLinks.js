export const pageLinks = [
  {
    title: 'Головна',
    path: 'main',
    iconId: 'home',
    mobilelinks: [
      { title: 'Список завдань', path: 'main/tasks', iconId: 'list', actions: 'filtered' },
      { title: 'Деталі завдання', path: 'main/task', iconId: 'info', actions: 'primary' },
      { title: 'Сповіщення', path: 'main/notifications', iconId: 'notifications', actions: 'primary' },
    ],
  },
  {
    title: 'Замовлення',
    path: 'orders',
    iconId: 'addtoCart',
    mobilelinks: [
      { title: 'Замовлення', path: 'orders/list', iconId: 'list', actions: 'filtered' },
      { title: 'Деталі замовлення', path: 'orders/order', iconId: 'assignment-ok', actions: 'primary' },
      { title: 'ТТН', path: 'orders/ttn', iconId: 'ttn', actions: 'primary' },
    ],
  },
  {
    title: 'Повернення',
    path: 'returns',
    iconId: 'return',
    mobilelinks: [
      { title: 'Список повернень', path: 'returns/list', iconId: 'list', actions: 'filtered' },
      { title: 'Деталі повернення', path: 'returns/return', iconId: 'return', actions: 'primary' },
      { title: 'Інспекція', path: 'returns/inspection', iconId: 'inspect', actions: 'primary' },
    ],
  },
  {
    title: 'Товари',
    path: 'products',
    iconId: 'storage',
    mobilelinks: [
      { title: 'Товари', path: 'products/list', iconId: 'list', actions: 'filtered' },
      { title: 'Деталі товару', path: 'products/product', iconId: 'info', actions: 'primary' },
      { title: 'Залишки', path: 'products/stock', iconId: 'storage', actions: 'primary' },
    ],
  },
  {
    title: 'Звіти',
    path: 'raports',
    iconId: 'assignment-ok',
    mobilelinks: [
      { title: 'Звіти', path: 'raports/list', iconId: 'list', actions: 'primary' },
      { title: 'Звіт', path: 'raports/raport', iconId: 'assignment-ok', actions: 'primary' },
      { title: 'Статистика', path: 'raports/statistics', iconId: 'statistics', actions: 'primary' },
      { title: 'Проблеми', path: 'raports/problems', iconId: 'warning', actions: 'primary' },
    ],
  },
  {
    title: 'Контрагенти',
    path: 'counterParty',
    iconId: 'persons',
    mobilelinks: [
      { title: 'Контрагенти', path: 'counterParty/list', iconId: 'persons', actions: 'primary' },
      { title: 'Контрагент', path: 'counterParty/info', iconId: 'person', actions: 'primary' },
      { title: 'Чат', path: 'counterParty/chat', iconId: 'chat', actions: 'primary' },
    ],
  },
  {
    title: 'Налаштування',
    path: 'settings',
    iconId: 'settings',
    mobilelinks: [
      { title: 'Загальні', path: 'settings/app', iconId: 'settings', actions: 'primary' },
      // { title: 'Довідники', path: 'settings/global', iconId: 'settings', actions: 'primary' },
      // { title: 'Інше', path: 'settings/others', iconId: 'settings', actions: 'primary' },
    ],
  },
  {
    title: 'Адмін панель',
    path: 'admin',
    iconId: 'admin',
    mobilelinks: [
      { title: 'Адмін', path: 'admin/main', iconId: 'admin', actions: 'primary' },
      // { title: 'Менеджери', path: 'admin/managers', iconId: 'persons', actions: 'primary' },
      // { title: 'Вендори', path: 'admin/vendors', iconId: 'persons', actions: 'primary' },
      { title: 'Права доступу', path: 'admin/roles', iconId: 'admin', actions: 'primary' },
    ],
  },
];
