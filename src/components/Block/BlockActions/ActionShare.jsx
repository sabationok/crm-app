import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { toast } from 'react-toastify';
import { useBlock } from '../BlockContext';

import s from './BlockActions.module.scss';

const ActionShare = ({ status, iconId, title }) => {
  const { blockTitle } = useBlock();
  const actionClass = status ? s.actionActive : s.actionNotActive;
  let LINK = `${window.location.origin}/${title}`;

  async function handleShareBtnClick() {
    const shareData = {
      title: 'Поділитись назвою блоку',
      text: 'Поділитись назвою блоку',
      url: LINK,
    };
    try {
      navigator.share(shareData);
      toast.success(`Назва блоку для надсилання ${blockTitle}`);
    } catch (err) {
      toast.error(`Error: ${err}`);
    }
  }
  return (
    <ButtonIcon iconId={iconId} size="100%" className={actionClass} onClick={handleShareBtnClick}>
      <span className={s.actionTitle}>{title}</span>
    </ButtonIcon>
  );
};

export default ActionShare;
