import { toast } from 'react-toastify';

export const ordersMessages = {
  NOT_SELECTED_ID: () => toast.error(`Не обрано жодного замовлення`),
  DELETE_CONFIRM: id => `Бажаєте видалити замолення № ${id} ?`,
  DELETE_DECLINE: id => toast.info(`Видалення замовлення № ${id} скасовано`),
  DELETE_SUCCESS: id => toast.success(`Замовлення № ${id} видалене`),
  DELETE_ERROR: id => toast.error(`Видалення замовлення № ${id} невдале`),
};
