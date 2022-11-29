export const pageLinks = [
  {
    title: 'Головна',
    path: 'main',
    iconId: 'home',
    mobilelinks: [
      { title: 'Список завдань', path: 'mobile/tasks/list', iconId: 'list', actions: 'filtered' },
      { title: 'Деталі завдання', path: 'mobile/tasks/task', iconId: 'info', actions: 'primary' },
      { title: 'Сповіщення', path: 'mobile/tasks/notifications', iconId: 'notifications', actions: 'primary' },
    ],
  },
  {
    title: 'Замовлення',
    path: 'orders',
    iconId: 'addtoCart',
    mobilelinks: [
      { title: 'Замовлення', path: 'mobile/orders/list', iconId: 'list', actions: 'filtered' },
      { title: 'Деталі замовлення', path: 'mobile/orders/order', iconId: 'info', actions: 'primary' },
      { title: 'ТТН', path: 'mobile/orders/ttn', iconId: 'ttn', actions: 'primary' },
    ],
  },
  {
    title: 'Повернення',
    path: 'returns',
    iconId: 'return',
    mobilelinks: [
      { title: 'Список повернень', path: 'mobile/returns/list', iconId: 'list', actions: 'filtered' },
      { title: 'Деталі повернення', path: 'mobile/returns/return', iconId: 'info', actions: 'primary' },
      { title: 'Інспекція', path: 'mobile/returns/inspection', iconId: 'info', actions: 'primary' },
    ],
  },
  {
    title: 'Товари',
    path: 'products',
    iconId: 'storage',
    mobilelinks: [
      { title: 'Товари', path: 'mobile/products/list', iconId: 'list', actions: 'filtered' },
      { title: 'Деталі товару', path: 'mobile/products/product', iconId: 'info', actions: 'primary' },
      { title: 'Залишки', path: 'mobile/products/stock', iconId: 'storage', actions: 'primary' },
    ],
  },
  {
    title: 'Звіти',
    path: 'raports',
    iconId: 'assignment-ok',
    mobilelinks: [
      { title: 'Звіти', path: 'mobile/raports/list', iconId: 'assignment-ok', actions: 'primary' },
      { title: 'Статистика', path: 'mobile/raports/statistics', iconId: 'statistics', actions: 'primary' },
      { title: 'Проблеми', path: 'mobile/raports/problems', iconId: 'warning', actions: 'primary' },
    ],
  },
  {
    title: 'Контрагенти',
    path: 'counterParty',
    iconId: 'persons',
    mobilelinks: [
      { title: 'Контрагенти', path: 'mobile/counterParty/list', iconId: 'persons', actions: 'primary' },
      { title: 'Контрагент', path: 'mobile/counterParty/info', iconId: 'person', actions: 'primary' },
      { title: 'Чат', path: 'mobile/counterParty/chat', iconId: 'chat', actions: 'primary' },
    ],
  },
  {
    title: 'Налаштування',
    path: 'settings',
    iconId: 'settings',
    mobilelinks: [
      { title: 'Загальні', path: 'mobile/settings/app', iconId: 'settings', actions: 'primary' },
      { title: 'Довідники', path: 'mobile/settings/global', iconId: 'settings', actions: 'primary' },
      { title: 'Інше', path: 'mobile/settings/others', iconId: 'settings', actions: 'primary' },
    ],
  },
  {
    title: 'Адмін панель',
    path: 'admin',
    iconId: 'admin',
    mobilelinks: [
      { title: 'Адмін', path: 'mobile/admin/main', iconId: 'admin', actions: 'primary' },
      { title: 'Менеджери', path: 'mobile/admin/managers', iconId: 'persons', actions: 'primary' },
      { title: 'Вендори', path: 'mobile/admin/vendors', iconId: 'persons', actions: 'primary' },
      { title: 'Права доступу', path: 'mobile/admin', iconId: 'admin', actions: 'primary' },
    ],
  },
];
