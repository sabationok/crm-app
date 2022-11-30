import React from 'react';
import Block from 'components/Block/Block';
import FormPrimary from 'components/Forms/FormPrimary/FormPrimary';
export const BlockOrdersList = ({ tableTitles }) => {
  return <Block title="Список повернень" iconId="list" actions="withFilter" filter />;
};
export const BlockOrderInfo = () => {
  return (
    <Block title="Деталі" iconId="return" actions="primary">
      <FormPrimary formTitle="Деталі повернення" />
    </Block>
  );
};
export const BlockOrderTTN = () => {
  return (
    <Block title="Інспекція" iconId="inspect" actions="primary">
      <FormPrimary formTitle="Інспекція повернення" />
    </Block>
  );
};
