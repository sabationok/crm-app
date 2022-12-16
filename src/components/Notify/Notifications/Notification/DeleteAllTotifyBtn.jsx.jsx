import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useNotify } from 'components/Notify/NotifyProvider';

const DeleteAllTotifyBtn = ({ id, ...props }) => {
  const { appNotify } = useNotify();
  function handleDeleteAllNotifications() {
    appNotify.deleteAll();
  }
  return <ButtonIcon iconId="delete" size="28px" iconSize="100%" styles={{ padding: 0 }} onClick={handleDeleteAllNotifications} {...props} />;
};
export default DeleteAllTotifyBtn;
