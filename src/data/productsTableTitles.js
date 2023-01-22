// import { nanoid } from 'nanoid';

export const productsTableTitles = [
  {
    id: 1,
    title: 'Артикул (SKU)',
    dataKey: 'sku',
    action: 'string',
    search: true,
    filter: false,
    visible: true,
    width: '125px',
  },
  {
    id: 1,
    title: 'Створено/Оновлено',
    dataKey: 'createdAt/apdatedAt',
    action: 'date',
    search: false,
    filter: true,
    visible: true,
    width: '160px',
  },
  {
    id: 1,
    title: 'Статус',
    dataKey: 'approvedStatus',
    action: 'approvedStatus',
    search: false,
    filter: true,
    visible: true,
    width: '125px',
  },
  {
    id: 1,
    title: 'Видимість',
    dataKey: 'visibilityStatus',
    action: 'visibilityStatus',
    search: false,
    filter: true,
    visible: true,
    width: '125px',
  },
  {
    id: 1,
    title: 'Назва',
    dataKey: 'name',
    action: 'string',
    search: true,
    filter: false,
    visible: true,
    width: '125px',
  },
  {
    id: 1,
    title: 'Автор',
    dataKey: 'authorName',
    action: 'string',
    search: true,
    filter: false,
    visible: true,
    width: '125px',
  },
  {
    id: 1,
    title: 'ID автора',
    dataKey: 'authorId',
    action: 'string',
    search: true,
    filter: false,
    visible: true,
    width: '125px',
  },
  {
    id: 1,
    title: 'Ціна',
    dataKey: 'price',
    action: 'number',
    search: true,
    filter: true,
    visible: true,
    width: '80px',
  },
  {
    id: 1,
    title: 'Вартість',
    dataKey: 'cost',
    action: 'number',
    search: true,
    filter: true,
    visible: true,
    width: '80px',
  },
  {
    id: 1,
    title: 'Валюта',
    dataKey: 'currency',
    action: 'string',
    search: true,
    filter: true,
    visible: true,
    width: '60px',
  },
  {
    id: 1,
    title: 'Знижка',
    dataKey: 'sale',
    action: 'number',
    search: true,
    filter: true,
    visible: true,
    width: '80px',
  },
  {
    id: 1,
    title: 'Кешбек ID',
    dataKey: 'cashbackId',
    action: 'number',
    search: true,
    filter: true,
    visible: true,
    width: '80px',
  },
  {
    id: 1,
    title: 'Комісія, %',
    dataKey: 'commission',
    action: 'number',
    search: true,
    filter: true,
    visible: true,
    width: '80px',
  },
  {
    id: 1,
    title: 'Тип',
    dataKey: 'isCommission',
    action: 'typeStatus',
    search: false,
    filter: true,
    visible: true,
    width: '125px',
  },
  {
    id: 1,
    title: 'Категорія',
    dataKey: 'categoryName',
    action: 'category',
    search: true,
    filter: true,
    visible: true,
    width: '120px',
  },
  {
    id: 1,
    title: 'Наявність',
    dataKey: 'availability',
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
//     // counttitle: 'НАЗВА РАХУНКУ',
//     subCountId: '_ID', // ?
//     // subCounttitle: 'НАЗВА СУБ-РАХУНКУ',
//     categoryId: '', // ?
//     // categorytitle: '',
//     subCategoryId: '', // ?
//     // subCategorytitle: '',
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
