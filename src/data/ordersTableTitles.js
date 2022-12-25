export const ordersTableTitles = [
  { id: 1, name: 'Статус замовлення', dataTitle: 'orderStatus', action: 'status', search: true, filter: true, visible: true, width: '155px' },
  { id: 1, name: 'Тип замовлення', dataTitle: 'orderType', action: 'status', search: true, filter: true, visible: true, width: '135px' },

  { id: 1, name: 'Створено/Оновлено', dataTitle: 'createdAt/updatedAt', action: 'date', search: false, filter: true, visible: true, width: '180px' },
  { id: 1, name: 'Менеджер', dataTitle: 'managerName', action: 'string', search: true, filter: true, visible: true, width: '80px' },
  { id: 1, name: 'Валюта', dataTitle: 'currency', action: 'string', search: true, filter: true, visible: true, width: '80px' },
  { id: 1, name: 'Вартість', dataTitle: 'total', action: 'string', search: true, filter: true, visible: true, width: '80px' },
  { id: 1, name: 'Отримувач', dataTitle: 'reciever', action: 'string', search: true, filter: true, visible: true, width: '125px' },
  { id: 1, name: 'Замовник', dataTitle: 'customer', action: 'string', search: true, filter: true, visible: true, width: '125px' },
  { id: 1, name: 'Інвойси', dataTitle: 'invoices', action: 'string', search: true, filter: true, visible: true, width: '150px' },
  { id: 1, name: 'ТТН', dataTitle: 'ttnList', action: 'string', search: true, filter: true, visible: true, width: '150px' },
  { id: 1, name: 'Перевізники', dataTitle: 'tranporters', action: 'string', search: true, filter: true, visible: true, width: '125px' },
  { id: 1, name: 'Коментар', dataTitle: 'name', action: 'string', search: true, filter: true, visible: true, width: '100px' },
];
export const realizationsTableTitles = [
  { id: 1, name: 'Створено/Оновлено', dataTitle: 'createdAt/updatedAt', action: 'date', width: '180px' },
  { id: 1, name: 'Статус реалізації', dataTitle: 'realizationStatus', action: 'status', width: '155px' },
  { id: 1, name: 'Номер', dataTitle: 'number', action: 'string', width: '100px' },
  { id: 1, name: 'Вартість', dataTitle: 'total', action: 'string', width: '80px' },
  { id: 1, name: 'Тип оплати', dataTitle: 'paymentType', action: 'status', width: '135px' },
  { id: 1, name: 'Місце доставки', dataTitle: 'destination', action: 'destination', width: '150px' },
  { id: 1, name: 'Статус оплати', dataTitle: 'paymentStatus', action: 'status', width: '135px' },
  { id: 1, name: 'Вартість доставки', dataTitle: 'total', action: 'string', width: '80px' },
  { id: 1, name: 'Тип доставки', dataTitle: 'deliveryType', action: 'status', width: '135px' },
  { id: 1, name: 'Перевізник', dataTitle: 'tranporter', action: 'string', width: '125px' },
];
