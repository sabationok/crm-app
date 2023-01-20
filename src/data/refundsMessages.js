export const refundsMessages = {
  NOT_SELECTED_ID: () => `Не обрано жодного елементу`,
  STATUS_ERROR: id => `Зміна статусу повернення № "${id}" невдала`,

  Deleting: {
    confirm: id => `Бажаєте видалити повернення № "${id}" ?`,
    success: id => `Повернення № "${id}" видалено`,
    error: id => `Видалення повернення № "${id}" невдале`,
  },

  Archivating: {
    confirm: id => `Бажаєте архівувати повернення № "${id}" ?`,
    success: id => `Повернення № "${id}" архівовано`,
    error: id => `Архівування повернення № "${id}" невдале`,
  },
};
