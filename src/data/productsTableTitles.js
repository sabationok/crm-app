// import { nanoid } from 'nanoid';

export const productsTableTitles = [
  {
    id: 1,
    name: 'Артикул (SKU)',
    dataTitle: 'sku',
    action: 'string',
    search: true,
    filter: false,
    visible: true,
    width: '125px',
  },
  {
    id: 1,
    name: 'Створено/Оновлено',
    dataTitle: 'createdAt/apdatedAt',
    action: 'date',
    search: false,
    filter: true,
    visible: true,
    width: '160px',
  },
  {
    id: 1,
    name: 'Статус',
    dataTitle: 'approvedStatus',
    action: 'approvedStatus',
    search: false,
    filter: true,
    visible: true,
    width: '125px',
  },
  {
    id: 1,
    name: 'Видимість',
    dataTitle: 'visibilityStatus',
    action: 'visibilityStatus',
    search: false,
    filter: true,
    visible: true,
    width: '125px',
  },
  {
    id: 1,
    name: 'Назва',
    dataTitle: 'name',
    action: 'string',
    search: true,
    filter: false,
    visible: true,
    width: '125px',
  },
  {
    id: 1,
    name: 'Автор',
    dataTitle: 'authorName',
    action: 'string',
    search: true,
    filter: false,
    visible: true,
    width: '125px',
  },
  {
    id: 1,
    name: 'ID автора',
    dataTitle: 'creator._id',
    action: 'string',
    search: true,
    filter: false,
    visible: true,
    width: '125px',
  },
  {
    id: 1,
    name: 'Ціна',
    dataTitle: 'price',
    action: 'number',
    search: true,
    filter: true,
    visible: true,
    width: '80px',
  },
  {
    id: 1,
    name: 'Вартість',
    dataTitle: 'cost',
    action: 'number',
    search: true,
    filter: true,
    visible: true,
    width: '80px',
  },
  {
    id: 1,
    name: 'Валюта',
    dataTitle: 'currency',
    action: 'string',
    search: true,
    filter: true,
    visible: true,
    width: '60px',
  },
  {
    id: 1,
    name: 'Знижка',
    dataTitle: 'sale',
    action: 'number',
    search: true,
    filter: true,
    visible: true,
    width: '80px',
  },
  {
    id: 1,
    name: 'Кешбек ID',
    dataTitle: 'cashbackId',
    action: 'number',
    search: true,
    filter: true,
    visible: true,
    width: '80px',
  },
  {
    id: 1,
    name: 'Комісія, %',
    dataTitle: 'commission',
    action: 'number',
    search: true,
    filter: true,
    visible: true,
    width: '80px',
  },
  {
    id: 1,
    name: 'Тип',
    dataTitle: 'isCommission',
    action: 'typeStatus',
    search: false,
    filter: true,
    visible: true,
    width: '125px',
  },
  {
    id: 1,
    name: 'Категорія',
    dataTitle: 'categoryName',
    action: 'category',
    search: true,
    filter: true,
    visible: true,
    width: '120px',
  },
  {
    id: 1,
    name: 'Наявність',
    dataTitle: 'availability',
    action: 'availabilityStatus',
    search: true,
    filter: true,
    visible: true,
    width: '125px',
  },
];
// const transactions = [
//   {
//     author: '', // ? хто створив, ID
//     editor: '', // ? хто змінив, ID
//     auditor: '', // ? хто перевірив, ID
//     transactionDate: '20.01.2023', // ?
//     transactionTime: '20.01.2023', // ?
//     type: 'Дохід', // ? дохід/витрата/переказ
//     countId: '_ID', // ?
//     // countName: 'НАЗВА РАХУНКУ',
//     subCountId: '_ID', // ?
//     // subCountName: 'НАЗВА СУБ-РАХУНКУ',
//     categoryId: '', // ?
//     // categoryName: '',
//     subCategoryId: '', // ?
//     // subCategoryName: '',
//     document: '', // ? номер документу який підтверджує транзакцію
//     project: 'ID', // ? прикріпити операція до якогось проекту
//     provider: 'ID', // ? постачальник
//     customer: 'ID', // ? клієнт
//     amount: 'number', // ? сума
//     status: '', // ? статуси для перевірок
//     mark: '', // ? мітка
//     comment: '', // ?
//     tags: [], // ? на виріст, можливість добавити тег
//   },
// ];
// export const TRANSACTIONS_TITLES = [
//   {
//     id: 1,
//     title: 'Тип (income/expence/transfer)',
//     dataKey: 'type',
//     action: 'string',
//     search: true,
//     filter: false,
//     visible: true,
//     width: '125px',
//   },
//   {
//     id: 1,
//     title: 'Дата ств',
//     dataKey: 'transactionDate',
//     action: 'date',
//     search: true,
//     filter: false,
//     visible: true,
//     width: '125px',
//   },
//   {
//     id: 1,
//     title: 'Дата ств',
//     dataKey: 'transactionTime',
//     action: 'date',
//     search: true,
//     filter: false,
//     visible: true,
//     width: '125px',
//   },
// ];
