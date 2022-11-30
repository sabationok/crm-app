import React from 'react';
import Block from 'components/Block/Block';

export const BlockMainTasks = ({ tableTitles }) => {
  return <Block title="Список завдань" iconId="list" actions="withFilter" filter />;
};
export const BlockMainTask = () => {
  return <Block title="Завдання" iconId="info" actions="primary" />;
};
export const BlockMainNotify = () => {
  return <Block title="Сповіщення" iconId="notifications" actions="primary" />;
};
