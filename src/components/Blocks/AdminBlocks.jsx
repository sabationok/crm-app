import React from 'react';
import Block from 'components/Block/Block';

export const BlockAdmin = () => {
  return <Block title="Адмін" iconId="admin" actions="primary" />;
};
export const BlockManagers = () => {
  return <Block title="Менеджери" iconId="admin" actions="persons" />;
};
export const BlockVendors = () => {
  return <Block title="Вендори" iconId="admin" actions="persons" />;
};
export const BlockAdminRules = () => {
  return <Block title="Права доступу" iconId="admin" actions="primary" />;
};
