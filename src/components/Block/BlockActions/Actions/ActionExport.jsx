import React from 'react';
import ActionPrimary from './ActionPrimary';
import { useNotify } from 'components/Notify/NotifyProvider';
import { useBlock } from 'components/Block/BlockContext';

const ActionExport = ({ action }) => {
  const { title } = useBlock();
  const { appNotify } = useNotify();
  function handleActionClick() {
    appNotify.info('Вивантаження даних', `Ви завантажили дані із блоку ${title}.`);
  }
  return <ActionPrimary {...action} onClick={handleActionClick} />;
};

export default ActionExport;
