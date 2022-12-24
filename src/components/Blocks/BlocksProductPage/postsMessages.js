import { toast } from 'react-toastify';

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
