import React from 'react';
import Block from 'components/Block/Block';

export const BlockCounterPartysList = ({ tableTitles }) => {
  return <Block title="Контрагенти" iconId="persons" actions="withFilter" filter style={{ gridColumn: '1/11', gridRow: '1/5' }} />;
};
export const BlockCounterPartyInfo = () => {
  return <Block title="Контрагент" iconId="person" actions="primary" style={{ gridColumn: '1/5', gridRow: '5/11' }} />;
};
export const BlockCounterPartyChat = () => {
  return <Block title="Чат" iconId="chat" actions="primary" style={{ gridColumn: '5/11', gridRow: '5/11' }} />;
};
