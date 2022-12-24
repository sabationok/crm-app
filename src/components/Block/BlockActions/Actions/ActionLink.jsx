import React from 'react';
import ActionPrimary from './ActionPrimary';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const ActionLink = ({ action }) => {
  const { id } = useParams();
  async function handleCopyBtnClick() {
    let LINK = `${window.location}`;

    navigator.clipboard.writeText(LINK);

    toast.info(`Посилання скопійоване до буферу обміну`);
  }
  return <ActionPrimary {...action} onClick={handleCopyBtnClick} status={!!id} />;
};

export default ActionLink;
