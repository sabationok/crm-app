import React from 'react';
import ActionPrimary from './ActionPrimary';
import { toast } from 'react-toastify';
import { usePage } from 'components/AppPages/PageProvider';

const ActionLink = ({ action }) => {
  const { formDataObj } = usePage();

  async function handleCopyBtnClick() {
    let LINK = `${window.location}`;

    navigator.clipboard.writeText(LINK);

    toast.info(`Посилання скопійоване до буферу обміну`);
  }

  return <ActionPrimary {...action} onClick={handleCopyBtnClick} status={!!formDataObj} />;
};

export default ActionLink;
