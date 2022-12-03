import React from 'react';
import Block from 'components/Block/Block';

export const BlockRaportsList = () => {
  return <Block title="Звіти" iconId="list" actions="withFilter" filter style={{ gridColumn: '1/11', gridRow: '1/5' }}/>;
};
export const BlockRaportInfo = () => {
  return <Block title="Звіт" iconId="assignment-ok" actions="primary" style={{ gridColumn: '1/5', gridRow: '5/11' }}/>;
};
export const BlockStatistics = () => {
  return <Block title="Статистика" iconId="statistics" actions="primary" style={{ gridColumn: '5/11', gridRow: '5/11' }}/>;
};
export const BlockProblems = () => {
  return <Block title="Проблеми" iconId="warning" actions="primary" />;
};
