import React from 'react';
import Block from 'components/Block/Block';
import FormPrimary from 'components/Forms/FormPrimary/FormPrimary';
export const BlockOrdersList = ({ ...props }) => {
  return <Block title="Список замовлень" iconId="list" actions="withFilter" filter style={{ gridColumn: '1/11', gridRow: '1/5' }} {...props} />;
};
export const BlockOrderInfo = ({ ...props }) => {
  return (
    <Block title="Деталі" iconId="assignment-ok" actions="primary" style={{ gridColumn: '1/5', gridRow: '5/11' }} {...props}>
      <FormPrimary formTitle="Деталі замовлення" />
    </Block>
  );
};
export const BlockOrderTTN = ({ ...props }) => {
  return (
    <Block title="ТТН" iconId="ttn" actions="primary" style={{ gridColumn: '5/11', gridRow: '5/11' }} {...props}>
      <FormPrimary formTitle="ТТН до замовлення" />
    </Block>
  );
};
