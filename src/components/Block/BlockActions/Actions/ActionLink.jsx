import React from 'react';
import ActionPrimary from './ActionPrimary';
import { toast } from 'react-toastify';

const ActionLink = ({ action }) => {
  async function handleCopyBtnClick() {
    let LINK = `${window.location}`;

    navigator.clipboard.writeText(LINK);

    toast.info(`Посилання скопійоване до буферу обміну`);
  }
  return <ActionPrimary {...action} onClick={handleCopyBtnClick} />;
};

export default ActionLink;
