import React from 'react';
import ActionPrimary from './ActionPrimary';
import { toast } from 'react-toastify';
import { useBlock } from 'components/Block/BlockContext';

const ActionLink = ({ action }) => {
  const { title, appNotify } = useBlock();
  let LINK = `${window.location}/${title}`;

  function handleCopyBtnClick() {
    navigator.clipboard.writeText(LINK);
    toast.info(`Посилання на товар скопійоване "${title}"`);
    appNotify.info({ title: 'Посилання скопйоване', text: `"${LINK}"` });
  }
  return <ActionPrimary {...action} onClick={handleCopyBtnClick} />;
};

export default ActionLink;
