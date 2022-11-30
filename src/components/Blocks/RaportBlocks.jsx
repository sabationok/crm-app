import React from 'react';
import Block from 'components/Block/Block';

export const BlockRaportsList = () => {
  return <Block title="Звіти" iconId="list" actions="withFilter" filter />;
};
export const BlockRaportInfo = () => {
  return <Block title="Звіт" iconId="assignment-ok" actions="primary" />;
};
export const BlockStatistics = () => {
  return <Block title="Статистика" iconId="statistics" actions="primary" />;
};
export const BlockProblems = () => {
  return <Block title="Проблеми" iconId="warning" actions="primary" />;
};
