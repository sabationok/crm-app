export const ordersTableTitles = [
  { id: 1, title: 'Статус замовлення', dataKey: 'orderStatus', action: 'status', search: true, filter: true, visible: true, width: '155px' },
  { id: 1, title: 'Тип замовлення', dataKey: 'orderType', action: 'status', search: true, filter: true, visible: true, width: '135px' },

  { id: 1, title: 'Створено/Оновлено', dataKey: 'createdAt/updatedAt', action: 'date', search: false, filter: true, visible: true, width: '180px' },
  { id: 1, title: 'Менеджер', dataKey: 'managerName', action: 'string', search: true, filter: true, visible: true, width: '80px' },
  { id: 1, title: 'Валюта', dataKey: 'currency', action: 'string', search: true, filter: true, visible: true, width: '80px' },
  { id: 1, title: 'Вартість', dataKey: 'total', action: 'string', search: true, filter: true, visible: true, width: '80px' },
  { id: 1, title: 'Отримувач', dataKey: 'reciever', action: 'string', search: true, filter: true, visible: true, width: '125px' },
  { id: 1, title: 'Замовник', dataKey: 'customer', action: 'string', search: true, filter: true, visible: true, width: '125px' },
  { id: 1, title: 'Інвойси', dataKey: 'invoices', action: 'string', search: true, filter: true, visible: true, width: '150px' },
  { id: 1, title: 'ТТН', dataKey: 'ttnList', action: 'string', search: true, filter: true, visible: true, width: '150px' },
  { id: 1, title: 'Перевізники', dataKey: 'tranporters', action: 'string', search: true, filter: true, visible: true, width: '125px' },
  { id: 1, title: 'Коментар', dataKey: 'name', action: 'string', search: true, filter: true, visible: true, width: '100px' },
];
export const realizationsTableTitles = [
  { id: 1, name: 'Створено/Оновлено', dataKey: 'createdAt/updatedAt', action: 'date', width: '180px' },
  { id: 1, name: 'Статус реалізації', dataKey: 'realizationStatus', action: 'status', width: '155px' },
  { id: 1, name: 'Номер', dataKey: 'number', action: 'string', width: '100px' },
  { id: 1, name: 'Вартість', dataKey: 'total', action: 'string', width: '80px' },
  { id: 1, name: 'Тип оплати', dataKey: 'paymentType', action: 'status', width: '135px' },
  { id: 1, name: 'Місце доставки', dataKey: 'destination', action: 'destination', width: '150px' },
  { id: 1, name: 'Статус оплати', dataKey: 'paymentStatus', action: 'status', width: '135px' },
  { id: 1, name: 'Вартість доставки', dataKey: 'total', action: 'string', width: '80px' },
  { id: 1, name: 'Тип доставки', dataKey: 'deliveryType', action: 'status', width: '135px' },
  { id: 1, name: 'Перевізник', dataKey: 'tranporter', action: 'string', width: '125px' },
];
