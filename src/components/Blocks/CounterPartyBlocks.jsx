import React from 'react';
import Block from 'components/Block/Block';

export const BlockCounterPartysList = ({ tableTitles }) => {
  return <Block title="Контрагенти" iconId="persons" actions="withFilter" filter />;
};
export const BlockCounterPartyInfo = () => {
  return <Block title="Контрагент" iconId="person" actions="primary" />;
};
export const BlockCounterPartyChat = () => {
  return <Block title="Чат" iconId="chat" actions="primary" />;
};
