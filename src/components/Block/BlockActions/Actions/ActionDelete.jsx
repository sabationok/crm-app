import React from 'react';
import ActionPrimary from './ActionPrimary';
import { useBlock } from 'components/Block/BlockContext';
import { useParams } from 'react-router-dom';

const ActionDelete = ({ action }) => {
  const { deleteAction } = useBlock();
  const { id } = useParams();

  function handleDeleteAction() {
    deleteAction ? deleteAction(id) : console.log('error');
  }
  return deleteAction && <ActionPrimary {...action} onClick={handleDeleteAction} />;
};

export default ActionDelete;
