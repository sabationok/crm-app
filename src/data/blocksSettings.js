export const blocksNames = {
  ProductsList: 'BlockProductsList',
  ProductInfo: 'BlockProductInfo',
  ProductStock: 'BlockProductStock',
  OrdersList: 'BlockOrdersList',
  OrderInfo: 'BlockOrderInfo',
  OrderRealizations: 'BlockOrderRealizations',
  OrderDeliveries: 'BlockOrderDeliveries',
  RefundsList: 'BlockRefundsList',
  RefundInfo: 'BlockRefundInfo',
  RefundInspect: 'BlockRefundInspect',
  Admin: 'BlockAdmin',
  Managers: 'BlockManagers',
  Vendors: 'BlockVendors',
  AdminRules: 'BlockAdminRules',
  AdminSettings: 'BlockAdminSettings',
  AdminUsers: 'BlockAdminUsers',
  Categories: 'BlockCategories',
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
  { id: 8, name: 'create', type: 'product', title: 'Створити продукт', iconId: 'plus' },
  { id: 9, name: 'edit', type: 'product', title: 'Змінити продукт', iconId: 'edit' },
  { id: 10, name: 'edit', type: 'productImgs', title: 'Керувати зображеннями', iconId: 'gallery' },
  { id: 11, name: 'visibility', title: 'Змінити видимість', iconId: 'visibility-on' },
  { id: 12, name: 'copy', type: 'product', title: 'Копіювати продукт', iconId: 'copy' },
  { id: 13, name: 'delete', title: 'Видалити', iconId: 'delete' },
  ...actionsShare,
];
const actionsBlockProductStock = [
  { id: 14, name: 'edit', type: 'stock', title: 'Змінити залишки', iconId: 'edit' },
  { id: 15, name: 'delete', title: 'Видалити дані', iconId: 'delete' },
  ...actionsShare,
];
// blockProps: { style: { width: '95vw' } } }
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
  { name: blocksNames.ProductsList, fullPageMode: true, title: 'Список продуктів', iconId: 'list', actions: actionsWithFilter },
  { name: blocksNames.ProductInfo, fullPageMode: true, title: 'Деталі продукту', iconId: 'info', actions: actionsBlockProductInfo },
  { name: blocksNames.ProductStock, fullPageMode: true, title: 'Склад', iconId: 'storage', actions: actionsBlockProductStock },

  { name: blocksNames.OrdersList, fullPageMode: true, title: 'Список замовлень', iconId: 'list', actions: actionsWithFilter },
  {
    name: blocksNames.OrderInfo,
    fullPageMode: true,
    title: 'Деталі замовлення',
    iconId: 'assignment-in',
    actions: actionsBlockOrderInfo,
  },
  { name: blocksNames.OrderRealizations, fullPageMode: true, title: 'Реалізації', iconId: 'assignment-ok', actions: actionsBlockOrderDelivery },
  { name: blocksNames.OrderDeliveries, fullPageMode: true, title: 'Список відвантажень', iconId: 'ttn', actions: actionsBlockOrderDelivery },

  { name: blocksNames.RefundsList, fullPageMode: true, title: 'Список повернень', iconId: 'list', actions: actionsWithFilter },
  { name: blocksNames.RefundInfo, fullPageMode: true, title: 'Деталі повернень', iconId: 'assignment', actions: actionsShare },
  { name: blocksNames.RefundInspect, fullPageMode: true, title: 'Інспекція повернення', iconId: 'inspect', actions: actionsShare },

  { name: blocksNames.Admin, fullPageMode: true, title: 'Адмін', iconId: 'admin', actions: actionsShare },
  { name: blocksNames.Managers, fullPageMode: true, title: 'Менеджери', iconId: 'manager', actions: actionsShare },
  { name: blocksNames.Vendors, fullPageMode: true, title: 'Вендори', iconId: 'partners', actions: actionsShare },
  { name: blocksNames.AdminRules, fullPageMode: true, title: 'Права доступу', iconId: 'personLock', actions: actionsShare },
  { name: blocksNames.AdminSettings, fullPageMode: true, title: 'Налаштування адмін панелі', iconId: 'settings', actions: actionsShare },

  { name: blocksNames.Categories, fullPageMode: true, title: 'Управління категоріями', iconId: 'folder' },
];
export const blocksSettingsMap = {
  [blocksNames.ProductsList]: {
    name: blocksNames.ProductsList,
    fullPageMode: true,
    title: 'Список продуктів',
    iconId: 'list',
    actions: actionsWithFilter,
  },
  [blocksNames.ProductInfo]: {
    name: blocksNames.ProductInfo,
    fullPageMode: true,
    title: 'Деталі продукту',
    iconId: 'info',
    actions: actionsBlockProductInfo,
  },
  [blocksNames.ProductStock]: {
    name: blocksNames.ProductStock,
    fullPageMode: true,
    title: 'Склад',
    iconId: 'storage',
    actions: actionsBlockProductStock,
  },

  [blocksNames.OrdersList]: {
    name: blocksNames.OrdersList,
    fullPageMode: true,
    title: 'Список замовлень',
    iconId: 'list',
    actions: actionsWithFilter,
  },
  [blocksNames.OrderInfo]: {
    name: blocksNames.OrderInfo,
    fullPageMode: true,
    title: 'Деталі замовлення',
    iconId: 'assignment-in',
    actions: actionsBlockOrderInfo,
  },
  [blocksNames.OrderRealizations]: {
    name: blocksNames.OrderRealizations,
    fullPageMode: true,
    title: 'Реалізації',
    iconId: 'assignment-ok',
    actions: actionsBlockOrderDelivery,
  },
  [blocksNames.OrderDeliveries]: {
    name: blocksNames.OrderDeliveries,
    fullPageMode: true,
    title: 'Список відвантажень',
    iconId: 'ttn',
    actions: actionsBlockOrderDelivery,
  },
  [blocksNames.RefundsList]: {
    name: blocksNames.RefundsList,
    fullPageMode: true,
    title: 'Список повернень',
    iconId: 'list',
    actions: actionsWithFilter,
  },
  [blocksNames.RefundInfo]: {
    name: blocksNames.RefundInfo,
    fullPageMode: true,
    title: 'Деталі повернень',
    iconId: 'assignment',
    actions: actionsShare,
  },
  [blocksNames.RefundInspect]: {
    name: blocksNames.RefundInspect,
    fullPageMode: true,
    title: 'Інспекція повернення',
    iconId: 'inspect',
    actions: actionsShare,
  },
  [blocksNames.Admin]: { name: blocksNames.Admin, fullPageMode: true, title: 'Адмін', iconId: 'admin', actions: actionsShare },
  [blocksNames.Managers]: { name: blocksNames.Managers, fullPageMode: true, title: 'Менеджери', iconId: 'manager', actions: actionsShare },
  [blocksNames.Vendors]: { name: blocksNames.Vendors, fullPageMode: true, title: 'Вендори', iconId: 'partners', actions: actionsShare },
  [blocksNames.AdminUsers]: { name: blocksNames.AdminUsers, fullPageMode: true, iconId: 'persons', title: 'Керування користувачами' },
  [blocksNames.AdminRules]: { name: blocksNames.AdminRules, fullPageMode: true, title: 'Права доступу', iconId: 'personLock' },
  [blocksNames.AdminSettings]: {
    name: blocksNames.AdminSettings,
    fullPageMode: true,
    title: 'Налаштування адмін панелі',
    iconId: 'settings',
  },
  [blocksNames.Categories]: {
    name: blocksNames.Categories,
    fullPageMode: true,
    title: 'Управління категоріями',
    iconId: 'folder',
    actions: actionsShare,
  },
};
const getBlockSettings = blockName =>
  blocksSettingsMap[blockName] ?? { name: 'Error_block_settings', fullPageMode: false, title: 'Error block settings', iconId: 'error' };
export default getBlockSettings;
