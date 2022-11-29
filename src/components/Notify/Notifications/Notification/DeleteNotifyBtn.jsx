import React from 'react';
import { useNotify } from 'components/Notify/NotifyProvider';

import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

const DeleteNotifyBtn = ({ id }) => {
  const { appNotify } = useNotify();
  function handleDeleteNotification() {
    appNotify.delete(id);
  }
  return <ButtonIcon iconId="close" onClick={handleDeleteNotification} />;
};
export default DeleteNotifyBtn