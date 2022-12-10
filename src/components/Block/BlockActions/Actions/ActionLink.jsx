import React from 'react';
import ActionPrimary from './ActionPrimary';
import { toast } from 'react-toastify';
// import { useBlock } from 'components/Block/BlockContext';

const ActionLink = ({ action }) => {
  // const { title } = useBlock();
  let LINK = `${window.location}`;

  function handleCopyBtnClick() {
    navigator.clipboard.writeText(LINK);
    toast.info(`Посилання скопійоване до буферу обміну`);
  }
  return <ActionPrimary {...action} onClick={handleCopyBtnClick} />;
};

export default ActionLink;
