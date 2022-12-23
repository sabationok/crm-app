import React from 'react';
import ActionPrimary from './ActionPrimary';
import { useBlock } from 'components/Block/BlockContext';

const ActionFulLPageMode = ({ action }) => {
  const { isFullPageMode, actionToglleFullPageMode } = useBlock();

  return (
    actionToglleFullPageMode && <ActionPrimary {...action} iconId={isFullPageMode ? 'zoomMinus' : 'zoomPlus'} onClick={actionToglleFullPageMode} />
  );
};

export default ActionFulLPageMode;
