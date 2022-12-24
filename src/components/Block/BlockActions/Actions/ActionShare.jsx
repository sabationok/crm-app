import React from 'react';
import ActionPrimary from './ActionPrimary';

import { toast } from 'react-toastify';
import { useNotify } from 'components/Notify/NotifyProvider';
import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getPosts } from 'redux/selectors';

const ActionShare = ({ action }) => {
  const { appNotify } = useNotify();
  const { id } = useParams();

  async function handleShareBtnClick() {
    let LINK = `${window.location}/`;

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

  return <ActionPrimary {...action} onClick={handleShareBtnClick} status={!!id} />;
};

export default ActionShare;
