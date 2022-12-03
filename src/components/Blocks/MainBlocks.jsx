import React from 'react';
import Block from 'components/Block/Block';

export const BlockMainTasks = ({ tableTitles }) => {
  return <Block title="Список завдань" iconId="list" actions="withFilter" filter style={{ gridColumn: '1/11', gridRow: '1/5' }}/>;
};
export const BlockMainTask = () => {
  return <Block title="Завдання" iconId="info" actions="primary"style={{ gridColumn: '1/5', gridRow: '5/11' }} />;
};
export const BlockMainNotify = () => {
  return <Block title="Сповіщення" iconId="notifications" actions="primary" style={{ gridColumn: '5/11', gridRow: '5/11' }}/>;
};
