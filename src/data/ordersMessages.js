export const ordersMessages = {
  NOT_SELECTED: () => `Не обрано жодного елементу`,

  Deleting: {
    confirm: id => `Бажаєте видалити замолення № ${id} ?`,
    success: id => `Замовлення № ${id} видалене`,
    error: id => `Видалення замовлення № ${id} невдале`,
  },

  Archivating: {
    confirm: id => `Бажаєте архівувати замолення № ${id} ?`,
    success: id => `Замовлення № ${id} видалене`,
    error: id => `Видалення замовлення № ${id} невдале`,
  },

  Accepting: {
    confirm: id => `Бажаєте прийняти замолення № ${id} ?`,
    success: id => `Замовлення № ${id} прийнято`,
    error: id => `Прийняття замовлення № ${id} невдале`,
  },

  Declining: {
    confirm: id => `Бажаєте відхилити замолення № ${id} ?`,
    success: id => `Замовлення № ${id} віхилено`,
    error: id => `Відхилення замовлення № ${id} невдале`,
  },
};
