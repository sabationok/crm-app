import React from 'react';
import ActionPrimary from './ActionPrimary';

import { toast } from 'react-toastify';
import { useNotify } from 'components/Notify/NotifyProvider';
import { useSelector } from 'react-redux';
import { getPosts } from 'redux/selectors';

const ActionShare = ({ action }) => {
  const { selectedPostId } = useSelector(getPosts);
  const { appNotify } = useNotify();

  async function handleShareBtnClick() {
    if (!selectedPostId) {
      toast.error(`Помилка: пост не обрано`);
      return;
    }
    let LINK = `${window.location}/${selectedPostId}`;
    const shareData = {
      title: `Поділитись`,
      text: `Поділитись`,
      url: LINK,
    };
    try {
      navigator.share(shareData);
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
