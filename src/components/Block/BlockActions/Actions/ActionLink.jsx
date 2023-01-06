import React from 'react';
import ActionPrimary from './ActionPrimary';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getPageObjData } from 'redux/selectors';

const ActionLink = ({ action }) => {
  const pageDataObj = useSelector(getPageObjData);

  async function handleCopyBtnClick() {
    let LINK = `${window.location}`;

    navigator.clipboard.writeText(LINK);

    toast.info(`Посилання скопійоване до буферу обміну`);
  }

  return <ActionPrimary {...action} onClick={handleCopyBtnClick} status={!!pageDataObj} />;
};

export default ActionLink;
