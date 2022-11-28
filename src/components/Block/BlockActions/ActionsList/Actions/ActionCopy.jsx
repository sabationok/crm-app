import React from 'react';
import ActionPrimary from './ActionPrimary';
import { toast } from 'react-toastify';
import { useBlock } from 'components/Block/BlockContext';

const ActionCopy = ({ action }) => {
  const { blockTitle } = useBlock();
  function handleCopyBtnClick() {
    navigator.clipboard.writeText(blockTitle);
    toast.info(`Створено копію "${blockTitle}"`);
  }
  return <ActionPrimary {...action} onClick={handleCopyBtnClick} />;
};

export default ActionCopy;
