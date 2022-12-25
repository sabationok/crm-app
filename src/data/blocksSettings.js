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
export const blocksSettings = [
  { name: blocksNames.BlockProductsList, fullPageMode: true, title: 'Список продуктів', iconId: 'list' },
  { name: blocksNames.BlockProductInfo, fullPageMode: true, title: 'Деталі продукту', iconId: 'info' },
  { name: blocksNames.BlockProductStock, fullPageMode: true, title: 'Склад', iconId: 'storage' },

  { name: blocksNames.BlockOrdersList, fullPageMode: true, title: 'Список замовлень', iconId: 'list' },
  { name: blocksNames.BlockOrderInfo, fullPageMode: true, title: 'Деталі замовлення', iconId: 'assignment-in' },
  { name: blocksNames.BlockOrderRealizations, fullPageMode: true, title: 'Реалізації', iconId: 'assignment-ok' },
  { name: blocksNames.BlockOrderDeliveries, fullPageMode: true, title: 'Список відвантажень', iconId: 'ttn' },

  { name: blocksNames.BlockRefundsList, fullPageMode: true, title: 'Список повернень', iconId: 'list' },
  { name: blocksNames.BlockRefundInfo, fullPageMode: true, title: 'Деталі повернень', iconId: 'assignment' },
  { name: blocksNames.BlockRefundInspect, fullPageMode: true, title: 'Інспекція повернення', iconId: 'incpect' },

  { name: blocksNames.BlockAdmin, fullPageMode: true, title: 'Адмін', iconId: '' },
  { name: blocksNames.BlockManagers, fullPageMode: true, title: 'Менеджери', iconId: '' },
  { name: blocksNames.BlockVendors, fullPageMode: true, title: 'Вендори', iconId: '' },
  { name: blocksNames.BlockAdminRules, fullPageMode: true, title: 'Права доступу', iconId: '' },
  { name: blocksNames.BlockAdminSettings, fullPageMode: true, title: 'Налаштування адмін панелі', iconId: '' },
];
