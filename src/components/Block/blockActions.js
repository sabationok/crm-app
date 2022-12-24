const actionsPrimary = [
  { name: 'delete', title: 'Видалити', iconId: 'delete' },
  { name: 'link', title: 'Посилання', iconId: 'link' },
  { name: 'share', title: 'Поділитись', iconId: 'share' },
  { name: 'print', title: 'Друк', iconId: 'print', status: false },
  { name: 'export', title: 'Експорт', iconId: 'upload', status: false },
  { name: 'import', title: 'Імпорт', iconId: 'download', status: false },
];
const actionsWithFilter = [
  { name: 'search', title: 'Пошук', iconId: 'search', status: true },
  { name: 'filter', title: 'Фільтр', iconId: 'filter-off', status: false },
  { name: 'refresh', title: 'Оновити', iconId: 'refresh', status: true },
  { name: 'print', title: 'Друк', iconId: 'print', status: false },
  { name: 'export', title: 'Експорт', iconId: 'upload', status: false },
  { name: 'import', title: 'Імпорт', iconId: 'download', status: false },
];

// { name: 'refresh', title: 'Оновити', iconId: 'refresh', status: false },
// { name: 'edit', title: 'Редагувати', iconId: 'edit', status: true },
// { name: 'create', title: 'Створити', iconId: 'plus', status: false },
// { name: 'print', title: 'Друк', iconId: 'print', status: false },
// { name: 'print', title: 'Друк', iconId: 'print', status: false },
// { name: 'copy', title: 'Копіювати', iconId: 'copy', status: false },

const blockActions = { actionsPrimary, actionsWithFilter };
export default blockActions;
