import React from 'react';
import ActionPrimary from './ActionPrimary';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getPosts } from 'redux/selectors';

const ActionLink = ({ action }) => {
  const { selectedPostId } = useSelector(getPosts);

  async function handleCopyBtnClick() {
    if (!selectedPostId) {
      toast.error(`Помилка: пост не обрано`);
      return;
    }
    let LINK = `${window.location}/?id=${selectedPostId}`;
    navigator.clipboard.writeText(LINK);
    toast.info(`Посилання скопійоване до буферу обміну`);
  }
  return <ActionPrimary {...action} onClick={handleCopyBtnClick} />;
};

export default ActionLink;
