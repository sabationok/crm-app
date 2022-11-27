import React from 'react';

import ActionPrimary from './ActionPrimary';

const ActionPrint = ({ action }) => {
  return (
    <>
      <ActionPrimary {...action} />
    </>
  );
};

export default ActionPrint;
