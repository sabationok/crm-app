import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { toast } from 'react-toastify';

import s from './BlockActions.module.scss';

const ActionCopy = ({ status, iconId, title }) => {
  const actionClass = status ? s.actionActive : s.actionNotActive;
  let LINK = `${window.location.origin}/`;

  function handleCopieBtnClick() {
    navigator.clipboard.writeText(LINK);
    toast.info('Посилання скопійовано до буферу обміну');
  }
  // async function handleShareBtnClick() {
  //   const shareData = {
  //     title:
  //       'Привіт. Запрошую тебе у новий кешбек сервіс. Купуй товари у партнерів сервісу та збирай кешбеки. Також ти можеш запрошувати друзів та отримувати за це додаткову винагороду. Не гай часу.',
  //     text: 'Привіт. Запрошую тебе у новий кешбек сервіс. Купуй товари у партнерів сервісу та збирай кешбеки. Також ти можеш запрошувати друзів та отримувати за це додаткову винагороду. Не гай часу.',
  //     url: MY_REF_LINK,
  //   };
  //   try {
  //     navigator.share(shareData);
  //     // toast.success(`Link shared successfully`);
  //   } catch (err) {
  //     toast.error(`Error: ${err}`);
  //   }
  // }
  return (
    <ButtonIcon iconId={iconId} size="100%" className={actionClass} onClick={handleCopieBtnClick}>
      <span className={s.actionTitle}>{title}</span>
    </ButtonIcon>
  );
};

export default ActionCopy;
