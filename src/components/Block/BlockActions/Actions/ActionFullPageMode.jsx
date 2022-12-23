import React from 'react';
import ActionPrimary from './ActionPrimary';
import { useBlock } from 'components/Block/BlockContext';
import { MinTabletXl } from 'components/DeviceTypeInformer/DeviceTypeController';

const ActionFulLPageMode = ({ action }) => {
  const { isFullPageMode, actionToglleFullPageMode } = useBlock();

  return (
    <MinTabletXl>
      {actionToglleFullPageMode && (
        <ActionPrimary {...action} iconId={isFullPageMode ? 'zoomMinus' : 'zoomPlus'} onClick={actionToglleFullPageMode} />
      )}
    </MinTabletXl>
  );
};

export default ActionFulLPageMode;
