import { useContext, createContext } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { actionAddNotify, actionClearAllNotify, actionDeleteNotify } from 'redux/notifications/notificationsActions';
import { SUCCESS, INFO, ERROR, WARNING, SIMPLE } from './notifyConstants';

export const NotifyProvider = createContext();
export const useNotify = () => useContext(NotifyProvider);

const AppNotifyProvider = props => {
  const dispatch = useDispatch();
  const dispatchAddNotify = ({ title, type, text }) => {
    const newNotify = {
      id: nanoid(5),
      type: type,
      title: title,
      text: text,
      createdAt: String(new Date()),
    };
    console.log(newNotify);
    dispatch(actionAddNotify(newNotify));
  };
  const dispatchDeleteNotify = id => {
    dispatch(actionDeleteNotify(id));
  };
  const dispatchDeleteAllNotify = id => {
    const newNotify = {
      id: nanoid(5),
      type: INFO,
      title: 'Очищено всі сповіщення',
      text: '',
      createdAt: String(new Date()),
    };
    dispatch(actionClearAllNotify(newNotify));
  };
  const appNotify = {
    delete: id => {
      dispatchDeleteNotify(id);
    },
    deleteAll: () => {
      dispatchDeleteAllNotify();
    },
    success: (title, text) => {
      dispatchAddNotify({ title, text, type: SUCCESS });
    },
    info: (title, text) => {
      dispatchAddNotify({ title, text, type: INFO });
    },
    error: (title, text) => {
      dispatchAddNotify({ title, text, type: ERROR });
    },
    warning: (title, text) => {
      dispatchAddNotify({ title, text, type: WARNING });
    },
    simple: (title, text) => {
      dispatchAddNotify({ title, text, type: SIMPLE });
    },
  };

  return <NotifyProvider.Provider value={{ ...props, appNotify }}>{props.children}</NotifyProvider.Provider>;
};

export default AppNotifyProvider;
