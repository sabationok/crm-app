import React from 'react';
import ActionPrimary from './ActionPrimary';
// import { useBlock } from 'components/Block/BlockContext';

const ActionEdit = ({ action }) => {
  // const { handleToggleEditForm } = useBlock();

  return <ActionPrimary {...action} />;
};

export default ActionEdit;
