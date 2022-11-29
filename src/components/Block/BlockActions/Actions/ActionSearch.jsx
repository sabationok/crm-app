import React from 'react';
import ActionPrimary from './ActionPrimary';
import { useBlock } from 'components/Block/BlockContext';

const ActionSearch = ({ action }) => {
  const { handleToggleBlockSearch } = useBlock();
  return <ActionPrimary {...action} onClick={handleToggleBlockSearch} />;
};

export default ActionSearch;
