export const blocksNames = {
  BlockProductsList: 'BlockProductsList',
  BlockProductInfo: 'BlockProductInfo',
  BlockProductStock: 'BlockProductStock',
  BlockOrdersList: 'BlockOrdersList',
  BlockOrderInfo: 'BlockOrderInfo',
  BlockOrderRealizations: 'BlockOrderRealizations',
  BlockOrderDeliveries: 'BlockOrderDeliveries',
  BlockRefundsList: 'BlockRefundsList',
  BlockRefundInfo: 'BlockRefundInfo',
  BlockRefundInspect: 'BlockRefundInspect',
  BlockAdmin: 'BlockAdmin',
  BlockManagers: 'BlockManagers',
  BlockVendors: 'BlockVendors',
  BlockAdminRules: 'BlockAdminRules',
  BlockAdminSettings: 'BlockAdminSettings',
};
const actions_P_E_I = [
  { name: 'print', title: 'Друк', iconId: 'print' },
  { name: 'export', title: 'Експорт', iconId: 'upload', status: false },
  { name: 'import', title: 'Імпорт', iconId: 'download', status: false },
];
const actionsShare = [
  { name: 'link', title: 'Посилання', iconId: 'link' },
  { name: 'share', title: 'Поділитись', iconId: 'share' },
  ...actions_P_E_I,
];
const actionsWithFilter = [
  { name: 'search', title: 'Пошук', iconId: 'search', status: true },
  { name: 'filter', title: 'Фільтр', iconId: 'filter-off', status: false },
  { name: 'refresh', title: 'Оновити', iconId: 'refresh', status: true },
  ...actions_P_E_I,
];
const actionsBlockProductInfo = [
  { name: 'create', type: 'product', title: 'Створити продукт', iconId: 'plus' },
  { name: 'create', type: 'product', title: 'Змінити продукт', iconId: 'edit' },
  { name: 'create', type: 'delivery', title: 'Створити ТТН', iconId: 'assignment-ok' },
  { name: 'create', type: 'refund', title: 'Створити повернення', iconId: 'refund' },
  { name: 'copy', type: 'product', title: 'Копіювати продукт', iconId: 'copy' },
  { name: 'delete', title: 'Видалити', iconId: 'delete' },
  ...actionsShare,
];
const actionsBlockProductStock = [
  { name: 'edit', type: 'stock', title: 'Керувати складськими залишками', iconId: 'edit', blockProps: { style: { width: '95vw' } } },
  { name: 'delete', title: 'Видалити дані', iconId: 'delete' },
  ...actionsShare,
];
const actionsBlockOrderInfo = [
  { name: 'create', type: 'order', title: 'Створити замовлення', iconId: 'plus' },
  { name: 'delete', title: 'Видалити', iconId: 'delete' },
  ...actionsShare,
];
const actionsBlockOrderDelivery = [
  { name: 'create', type: 'delivery', title: 'Створити', iconId: 'plus' },
  { name: 'delete', title: 'Видалити', iconId: 'delete' },
  ...actionsShare,
];
export const blocksSettings = [
  { name: blocksNames.BlockProductsList, fullPageMode: true, title: 'Список продуктів', iconId: 'list', actions: actionsWithFilter },
  { name: blocksNames.BlockProductInfo, fullPageMode: true, title: 'Деталі продукту', iconId: 'info', actions: actionsBlockProductInfo },
  { name: blocksNames.BlockProductStock, fullPageMode: true, title: 'Склад', iconId: 'storage', actions: actionsBlockProductStock },

  { name: blocksNames.BlockOrdersList, fullPageMode: true, title: 'Список замовлень', iconId: 'list', actions: actionsWithFilter },
  { name: blocksNames.BlockOrderInfo, fullPageMode: true, title: 'Деталі замовлення', iconId: 'assignment-in', actions: actionsBlockOrderInfo },
  { name: blocksNames.BlockOrderRealizations, fullPageMode: true, title: 'Реалізації', iconId: 'assignment-ok', actions: actionsBlockOrderDelivery },
  { name: blocksNames.BlockOrderDeliveries, fullPageMode: true, title: 'Список відвантажень', iconId: 'ttn', actions: actionsBlockOrderDelivery },

  { name: blocksNames.BlockRefundsList, fullPageMode: true, title: 'Список повернень', iconId: 'list', actions: actionsWithFilter },
  { name: blocksNames.BlockRefundInfo, fullPageMode: true, title: 'Деталі повернень', iconId: 'assignment', actions: actionsShare },
  { name: blocksNames.BlockRefundInspect, fullPageMode: true, title: 'Інспекція повернення', iconId: 'incpect', actions: actionsShare },

  { name: blocksNames.BlockAdmin, fullPageMode: true, title: 'Адмін', iconId: 'admin', actions: actionsShare },
  { name: blocksNames.BlockManagers, fullPageMode: true, title: 'Менеджери', iconId: 'manager', actions: actionsShare },
  { name: blocksNames.BlockVendors, fullPageMode: true, title: 'Вендори', iconId: 'partners', actions: actionsShare },
  { name: blocksNames.BlockAdminRules, fullPageMode: true, title: 'Права доступу', iconId: 'personLock', actions: actionsShare },
  { name: blocksNames.BlockAdminSettings, fullPageMode: true, title: 'Налаштування адмін панелі', iconId: 'settings', actions: actionsShare },
];
