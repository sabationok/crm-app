import React from 'react';
import ActionPrimary from './ActionPrimary';
import { useBlock } from 'components/Block/BlockContext';

const ActionDelete = ({ action }) => {
  const { deleteAction } = useBlock();

  return deleteAction && <ActionPrimary {...action} onClick={deleteAction} />;
};

export default ActionDelete;
