// import { nanoid } from 'nanoid';

export const refundsTableTitles = [
  {
    id: 1,
    title: 'Створено/Оновлено',
    dataKey: 'createdAt/apdatedAt',
    action: 'date',
    search: false,
    filter: true,
    visible: true,
    width: '200px',
  },
  {
    id: 1,
    title: 'Документ, №',
    dataKey: 'number',
    action: 'string',
    search: true,
    filter: false,
    visible: true,
    width: '125px',
  },
  {
    id: 1,
    title: 'Замовлення, №',
    dataKey: 'order',
    action: 'string',
    search: true,
    filter: false,
    visible: true,
    width: '125px',
  },
  {
    id: 1,
    title: 'ТТН, №',
    dataKey: 'ttn',
    action: 'string',
    search: true,
    filter: false,
    visible: true,
    width: '125px',
  },
  {
    id: 1,
    title: 'Статус',
    dataKey: 'status',
    action: 'status',
    search: false,
    filter: true,
    visible: true,
    width: '125px',
  },
  {
    id: 1,
    title: 'Артикули',
    dataKey: 'skuList',
    action: 'list',
    search: false,
    filter: true,
    visible: true,
    width: '125px',
  },
  {
    id: 1,
    title: 'Менеджер',
    dataKey: 'managerCode',
    action: 'string',
    search: false,
    filter: true,
    visible: true,
    width: '125px',
  },
  {
    id: 1,
    title: 'Вендор',
    dataKey: 'vendorCode',
    action: 'list',
    search: false,
    filter: true,
    visible: true,
    width: '125px',
  },
  // {
  //   id: 1,
  //   title: 'Причина',
  //   dataKey: 'reason',
  //   action: 'status',
  //   search: false,
  //   filter: true,
  //   visible: true,
  //   width: '125px',
  // },
];
// export const transactions = [
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
//     categoryId: '_ID', // ?
//     // categorytitle: '',
//     subCategoryId: '_ID', // ?
//     // subCategorytitle: '',
//     document: 'ID', // ? номер документу який підтверджує транзакцію
//     project: 'ID', // ? прикріпити операція до якогось проекту
//     provider: 'ID', // ? постачальник
//     customer: 'ID', // ? клієнт
//     amount: 'number', // ? сума
//     status: 'ID', // ? статуси для перевірок
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
