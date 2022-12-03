import React from 'react';
import Block from 'components/Block/Block';
import FormPrimary from 'components/Forms/FormPrimary/FormPrimary';
export const BlockOrdersList = ({ tableTitles }) => {
  return <Block title="Список замовлень" iconId="list" actions="withFilter" filter />;
};
export const BlockOrderInfo = () => {
  return (
    <Block title="Деталі" iconId="assignment-ok" actions="primary">
      <FormPrimary formTitle="Деталі замовлення" />
    </Block>
  );
};
export const BlockOrderTTN = () => {
  return (
    <Block title="ТТН" iconId="ttn" actions="primary">
      <FormPrimary formTitle="ТТН до замовлення" />
    </Block>
  );
};
