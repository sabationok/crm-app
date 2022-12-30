import React from 'react';
import ActionPrimary from './ActionPrimary';
import { useBlock } from 'components/Block/BlockContext';
import { toast } from 'react-toastify';
import { usePage } from 'components/AppPages/PageProvider';

const ActionDelete = ({ action }) => {
  const { deleteAction } = useBlock();
  const { formDataObj } = usePage();

  function handleDeleteAction() {
    deleteAction ? deleteAction(formDataObj?._id) : toast.error('DELETE ERROR');
  }
  return deleteAction && <ActionPrimary onClick={handleDeleteAction} {...action} status={!!formDataObj} />;
};

export default ActionDelete;
