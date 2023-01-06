import React from 'react';
import ActionPrimary from './ActionPrimary';

import { toast } from 'react-toastify';
import { useNotify } from 'components/Notify/NotifyProvider';
import { useSelector } from 'react-redux';
import { getPageObjData } from 'redux/selectors';

const ActionShare = ({ action }) => {
  const { appNotify } = useNotify();
  const pageDataObj = useSelector(getPageObjData);

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

  return <ActionPrimary {...action} onClick={handleShareBtnClick} status={!!pageDataObj} />;
};

export default ActionShare;
