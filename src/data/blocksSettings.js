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
  { id: 1, name: 'print', title: 'Друк', iconId: 'print' },
  { id: 2, name: 'export', title: 'Експорт', iconId: 'upload', status: false },
  { id: 3, name: 'import', title: 'Імпорт', iconId: 'download', status: false },
];
const actionsShare = [
  { id: 4, name: 'link', title: 'Посилання', iconId: 'link' },
  { id: 5, name: 'share', title: 'Поділитись', iconId: 'share' },
  ...actions_P_E_I,
];
const actionsWithFilter = [
  { id: 6, name: 'search', title: 'Пошук', iconId: 'search', status: true },
  { id: 7, name: 'filter', title: 'Фільтр', iconId: 'filter-off', status: false },
  { id: 8, name: 'refresh', title: 'Оновити', iconId: 'refresh', status: true },
  ...actions_P_E_I,
];
const actionsBlockProductInfo = [
  { id: 8, name: 'create', type: 'product', title: 'Створити продукт' },
  { id: 9, name: 'edit', type: 'product', title: 'Змінити продукт' },
  { id: 10, name: 'edit', type: 'productImgs', title: 'Керувати зображеннями', iconId: 'gallery' },
  { id: 11, name: 'visibility', title: 'Змінити видимість' },
  { id: 12, name: 'copy', type: 'product', title: 'Копіювати продукт', iconId: 'copy' },
  { id: 13, name: 'delete', title: 'Видалити', iconId: 'delete' },
  ...actionsShare,
];
const actionsBlockProductStock = [
  { id: 14, name: 'edit', type: 'stock', title: 'Змінити залишки', iconId: 'edit', blockProps: { style: { width: '95vw' } } },
  { id: 15, name: 'delete', title: 'Видалити дані', iconId: 'delete' },
  ...actionsShare,
];
const actionsBlockOrderInfo = [
  { id: 16, name: 'create', type: 'order', title: 'Створити замовлення', iconId: 'plus' },
  { id: 17, name: 'edit', type: 'order', title: 'Змінити замовлення', iconId: 'edit' },
  { id: 18, name: 'delete', title: 'Видалити', iconId: 'delete' },
  { id: 19, name: 'create', type: 'delivery', title: 'Створити ТТН', iconId: 'assignment-ok' },
  { id: 20, name: 'create', type: 'refund', title: 'Створити повернення', iconId: 'refund' },
  ...actionsShare,
];
const actionsBlockOrderDelivery = [
  { id: 21, name: 'create', type: 'delivery', title: 'Створити', iconId: 'plus' },
  { id: 22, name: 'delete', title: 'Видалити', iconId: 'delete' },
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
