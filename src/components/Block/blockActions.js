const actionsPrimary = [
  { name: 'link', title: 'Посилання', iconId: 'link', status: true },
  // { name: 'copy', title: 'Копіювати', iconId: 'copy', status: false },
  { name: 'share', title: 'Поділитись', iconId: 'share', status: true },
  // { name: 'refresh', title: 'Оновити', iconId: 'refresh', status: false },
  // { name: 'edit', title: 'Редагувати', iconId: 'edit', status: true },
  // { name: 'create', title: 'Створити', iconId: 'plus', status: false },
  // { name: 'print', title: 'Друк', iconId: 'print', status: false },
  // { name: 'print', title: 'Друк', iconId: 'print', status: false },
  { name: 'zoom', title: 'Вигляд', status: true },
  { name: 'export', title: 'Експорт', iconId: 'upload', status: false },
  { name: 'import', title: 'Імпорт', iconId: 'download', status: false },
  { name: 'delete', title: 'Видалити', iconId: 'delete', status: true },
];
const actionsWithFilter = [
  { name: 'search', title: 'Пошук', iconId: 'search', status: true },
  { name: 'filter', title: 'Фільтр', iconId: 'filter-off', status: false },
  { name: 'link', title: 'Посилання', iconId: 'link', status: true },
  { name: 'share', title: 'Поділитись', iconId: 'share', status: true },
  { name: 'zoom', title: 'Вигляд', status: true },
  { name: 'refresh', title: 'Оновити', iconId: 'refresh', status: true },
  // { name: 'copy', title: 'Копіювати', iconId: 'copy', status: false },
  // { name: 'edit', title: 'Редагувати', iconId: 'edit', status: false },
  // { name: 'delete', title: 'Видалити', iconId: 'delete', status: true },
  // { name: 'create', title: 'Створити', iconId: 'plus', status: false },
  { name: 'print', title: 'Друк', iconId: 'print', status: false },
  { name: 'export', title: 'Експорт', iconId: 'upload', status: false },
  { name: 'import', title: 'Імпорт', iconId: 'download', status: false },
];
const blockActions = { actionsPrimary, actionsWithFilter };
export default blockActions;
