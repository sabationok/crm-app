import React from 'react';
import ActionPrimary from './ActionPrimary';

const ActionRefresh = ({ action }) => {
  function refresh(params) {
    window.location.reload();
  }
  return <ActionPrimary {...action} onClick={refresh} />;
};

export default ActionRefresh;
