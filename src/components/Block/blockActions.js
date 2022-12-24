import { toast } from 'react-toastify';
const actionsPrimary = [
  { name: 'delete', title: 'Видалити', iconId: 'delete', status: true },
  { name: 'link', title: 'Посилання', iconId: 'link', status: true },
  { name: 'share', title: 'Поділитись', iconId: 'share', status: true },
  { name: 'print', title: 'Друк', iconId: 'print', status: false },
  { name: 'export', title: 'Експорт', iconId: 'upload', status: false },
  { name: 'import', title: 'Імпорт', iconId: 'download', status: false },
];
const actionsWithFilter = [
  { name: 'search', title: 'Пошук', iconId: 'search', status: true },
  { name: 'filter', title: 'Фільтр', iconId: 'filter-off', status: false },
  { name: 'link', title: 'Посилання', iconId: 'link', status: true },
  { name: 'share', title: 'Поділитись', iconId: 'share', status: true },
  { name: 'refresh', title: 'Оновити', iconId: 'refresh', status: true },
  { name: 'print', title: 'Друк', iconId: 'print', status: false },
  { name: 'export', title: 'Експорт', iconId: 'upload', status: false },
  { name: 'import', title: 'Імпорт', iconId: 'download', status: false },
];
// { name: 'export', title: 'Експорт', iconId: 'upload', status: false },
// { name: 'import', title: 'Імпорт', iconId: 'download', status: false },
// { name: 'copy', title: 'Копіювати', iconId: 'copy', status: false },
// { name: 'refresh', title: 'Оновити', iconId: 'refresh', status: false },
// { name: 'edit', title: 'Редагувати', iconId: 'edit', status: true },
// { name: 'create', title: 'Створити', iconId: 'plus', status: false },
// { name: 'print', title: 'Друк', iconId: 'print', status: false },
// { name: 'print', title: 'Друк', iconId: 'print', status: false },
// { name: 'copy', title: 'Копіювати', iconId: 'copy', status: false },
// { name: 'edit', title: 'Редагувати', iconId: 'edit', status: false },
// { name: 'delete', title: 'Видалити', iconId: 'delete', status: true },
// { name: 'create', title: 'Створити', iconId: 'plus', status: false },
const blockActions = { actionsPrimary, actionsWithFilter };
export default blockActions;

export const postsMessages = {
  NOT_SELECTED_ID: () => toast.error(`Не обрано жодного продукту`),
  DELETE_CONFIRM: id => `Бажаєте видалити продукт № ${id} ?`,
  DELETE_DECLINE: id => toast.info(`Видалення продукту № ${id} скасовано`),
  DELETE_SUCCESS: id => toast.success(`Продукт № ${id} видалений`),
  DELETE_ERROR: id => toast.error(`Видалення продукту № ${id} невдале`),
  VISIBILITY_CONFIRM: id => `Бажаєте змінити видимість продукту № ${id} ?`,
  VISIBILITY_CHANGED: id => toast.success(`Видимість продукту № ${id} змінена`),
  VISIBILITY_ERROR: id => toast.error(`Зміна видимості продукту № ${id} невдала`),
  APPROVED: id => toast.success(`Продукт № ${id} затверджений`),
  APPROVED_CONFIRM: id => `Бажаєте затвердити продукт № ${id} ?`,
  REJECTED: id => toast.success(`Продукт № ${id} відхилено`),
  REJECTED_CONFIRM: id => `Бажаєте відхилити продукт № ${id} ?`,
  STATUS_ERROR: id => toast.error(`Зміна статусу продукту № ${id} невдала`),
};
