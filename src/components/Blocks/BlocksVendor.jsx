import React from 'react';
import Block from 'components/Block/Block';

export const BlockProfile = () => {
  return <Block title="Профіль" iconId="person" actions="primary" style={{ gridColumn: '1/11', gridRow: '1/5' }} />;
};
export const BlockBrands = () => {
  return <Block title="Бренди" iconId="brand" actions="primary" style={{ gridColumn: '1/5', gridRow: '5/11' }} />;
};
