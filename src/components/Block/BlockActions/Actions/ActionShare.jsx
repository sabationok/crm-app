import React from 'react';
import ActionPrimary from './ActionPrimary';

import { toast } from 'react-toastify';
import { useBlock } from 'components/Block/BlockContext';
import { useNotify } from 'components/Notify/NotifyProvider';

const ActionShare = ({ action }) => {
  const { title } = useBlock();
  const { appNotify } = useNotify();
  let LINK = `${window.location}/${title}`;

  async function handleShareBtnClick() {
    const shareData = {
      title: `Поділитись назвою блоку ${title}`,
      text: `Поділитись назвою блоку ${title}`,
      url: LINK,
    };
    try {
      navigator.share(shareData);
      toast.success(`Назва блоку для надсилання ${title}`);
      appNotify.success(shareData.title, `${shareData.text}, ${shareData.url}`);
    } catch (err) {
      console.log(err);
      toast.error(`Помилка: ${err}`);
      appNotify.error(`Помилка при надсиланні`, `${err}`);
    }
  }

  return <ActionPrimary {...action} onClick={handleShareBtnClick} />;
};

export default ActionShare;
