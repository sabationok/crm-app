import React from 'react';
import ActionPrimary from './ActionPrimary';
import { toast } from 'react-toastify';
import { useBlock } from 'components/Block/BlockContext';

const ActionLink = ({ action }) => {
  const { title } = useBlock();
  let LINK = `${window.location}/${title}`;
  
  function handleCopyBtnClick() {
    navigator.clipboard.writeText(LINK);
    console.log(LINK)
    toast.info(`Посилання на товар скопійоване "${title}"`);
  }
  return <ActionPrimary {...action} onClick={handleCopyBtnClick} />;
};

export default ActionLink;
