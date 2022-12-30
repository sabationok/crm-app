import React from 'react';
import ActionPrimary from './ActionPrimary';

import { toast } from 'react-toastify';
import { useNotify } from 'components/Notify/NotifyProvider';
import { usePage } from 'components/AppPages/PageProvider';

const ActionShare = ({ action }) => {
  const { appNotify } = useNotify();
  const { formDataObj } = usePage();

  async function handleShareBtnClick() {
    let LINK = `${window.location}`;

    const shareData = {
      title: `Поділитись`,
      text: `Поділитись`,
      url: LINK,
    };
    try {
      await navigator.share(shareData);
      appNotify.success(shareData.title, `${shareData.text}, ${shareData.url}`);
    } catch (err) {
      console.log(err);
      toast.error(`Помилка: ${err}`);
      appNotify.error(`Помилка при надсиланні`, `${err}`);
    }
  }

  return <ActionPrimary {...action} onClick={handleShareBtnClick} status={!!formDataObj} />;
};

export default ActionShare;
