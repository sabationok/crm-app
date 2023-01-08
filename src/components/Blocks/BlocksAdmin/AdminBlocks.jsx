import React from 'react';
import Block from 'components/Block/Block';

export const BlockManagers = ({ ...props }) => {
  return <Block style={{ gridColumn: '6/11', gridRow: '1/5' }} {...props} />;
};
export const BlockVendors = ({ ...props }) => {
  return <Block style={{ gridColumn: '1/6', gridRow: '5/8' }} {...props} />;
};
export const BlockAdminRules = ({ ...props }) => {
  return <Block style={{ gridColumn: '6/11', gridRow: '5/8' }} {...props} />;
};
export const BlockAdminSettings = ({ ...props }) => {
  return <Block style={{ gridColumn: '1/6', gridRow: '8/11' }} {...props} />;
};
export const BlockAdmin = ({ ...props }) => {
  return <Block style={{ gridColumn: '6/11', gridRow: '8/11' }} {...props}></Block>;
};
