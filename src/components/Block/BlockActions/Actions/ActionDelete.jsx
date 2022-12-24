import React from 'react';
import ActionPrimary from './ActionPrimary';
import { useBlock } from 'components/Block/BlockContext';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const ActionDelete = ({ action }) => {
  const { deleteAction } = useBlock();
  const { id } = useParams();

  function handleDeleteAction() {
    deleteAction ? deleteAction(action?.id ?? id) : toast.error('ERROR DELETE');
  }
  return deleteAction && <ActionPrimary onClick={handleDeleteAction} {...action} status={!!id} />;
};

export default ActionDelete;
