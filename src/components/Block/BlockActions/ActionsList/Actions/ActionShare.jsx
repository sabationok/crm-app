import React from 'react';
import ActionPrimary from './ActionPrimary';

import { toast } from 'react-toastify';
import { useBlock } from '../../../BlockContext';

const ActionShare = ({ action }) => {
  const { title } = useBlock();
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
    } catch (err) {
      toast.error(`Error: ${err}`);
    }
  }

  return <ActionPrimary {...action} onClick={handleShareBtnClick} />;
};

export default ActionShare;
