import React from 'react';
import Block from 'components/Block/Block';

export const BlockAdmin = ({ ...props }) => {
  return <Block title="Адмін" iconId="admin" actions="primary" style={{ gridColumn: '1/6', gridRow: '1/5' }} {...props} />;
};
export const BlockManagers = ({ ...props }) => {
  return <Block title="Менеджери" iconId="admin" actions="persons" style={{ gridColumn: '6/11', gridRow: '1/5' }} {...props} />;
};
export const BlockVendors = ({ ...props }) => {
  return <Block title="Вендори" iconId="admin" actions="persons" style={{ gridColumn: '1/6', gridRow: '5/8' }} {...props} />;
};
export const BlockAdminRules = ({ ...props }) => {
  return <Block title="Права доступу" iconId="admin" actions="primary" style={{ gridColumn: '6/11', gridRow: '5/8' }} {...props} />;
};
export const BlockAdminSettings = ({ ...props }) => {
  return <Block title="Налаштування" iconId="settings" actions="primary" style={{ gridColumn: '1/6', gridRow: '8/11' }} {...props} />;
};
