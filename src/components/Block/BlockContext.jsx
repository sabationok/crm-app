import { useContext, createContext } from 'react';
import blockActions from './blockActions';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { actionAddNotify } from 'redux/notifications/notificationsActions';

export const BlockProvider = createContext();
export const useBlock = () => useContext(BlockProvider);

const BlockContext = props => {
  const dispatch = useDispatch();

  function dispatchAddNotify({ title, type, text }) {
    dispatch(
      actionAddNotify({
        id: nanoid(5),
        type: type,
        title: title,
        text: text,
        createdAt: new Date(),
      })
    );
  }

  const appNotify = {
    success: ({ title, text }) => {
      dispatchAddNotify({ title, text, type: 'success' });
    },
    info: ({ title, text }) => {
      dispatchAddNotify({ title, text, type: 'info' });
    },
    error: ({ title, text }) => {
      dispatchAddNotify({ title, text, type: 'error' });
    },
    warning: ({ title, text }) => {
      dispatchAddNotify({ title, text, type: 'warning' });
    },
    primary: ({ title, text }) => {
      dispatchAddNotify({ title, text, type: 'primary' });
    },
  };
  return (
    <BlockProvider.Provider value={{ ...props, ...blockActions, appNotify }}>{props.children}</BlockProvider.Provider>
  );
};

export default BlockContext;
