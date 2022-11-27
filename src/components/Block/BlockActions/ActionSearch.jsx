import React from 'react';
import ActionPrimary from './ActionPrimary';
import { useBlock } from '../BlockContext';

const ActionSearch = ({ action }) => {
  const { handleBlockSearch } = useBlock();
  return <ActionPrimary {...action} onClick={handleBlockSearch} />;
};

export default ActionSearch;
