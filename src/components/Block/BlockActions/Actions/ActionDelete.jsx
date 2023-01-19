import React from 'react';
import ActionPrimary from './ActionPrimary';
import { useBlock } from 'components/Block/BlockContext';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getPageObjData } from 'redux/selectors';
import { useNotify } from 'components/Notify/NotifyProvider';

const ActionDelete = ({ action }) => {
  const pageDataObj = useSelector(getPageObjData);
  const { appNotify } = useNotify();
  const { deleteAction } = useBlock();

  function handleDeleteAction() {
    if (deleteAction) {
      deleteAction(pageDataObj?._id);
      appNotify.success(`Видалення успішне`, `ID: ${pageDataObj?._id}`);
      toast.success('DELETE SUCCESS');
      return;
    }
    appNotify.error(`Помилка при видаленні`, `ID: ${pageDataObj?._id}`);
    toast.error('DELETE ERROR');
  }
  return deleteAction && <ActionPrimary onClick={handleDeleteAction} {...action} status={!!pageDataObj} />;
};

export default ActionDelete;
