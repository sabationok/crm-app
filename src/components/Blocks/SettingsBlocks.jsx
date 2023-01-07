import React from 'react';
import Block from 'components/Block/Block';
export const BlockSettings = () => {
  return <Block title="Налаштування" iconId="settings" actions="primary" style={{ gridColumn: '1/11', gridRow: '1/5' }} />;
};
export const BlockSetProfile = () => {
  return <Block title="Профіль" iconId="setProfile" actions="primary" style={{ gridColumn: '5/11', gridRow: '5/11' }} />;
};
