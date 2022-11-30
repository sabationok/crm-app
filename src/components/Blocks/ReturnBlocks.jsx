import React from 'react';
import Block from 'components/Block/Block';
import FormPrimary from 'components/Forms/FormPrimary/FormPrimary';
export const BlockReturnsList = ({ tableTitles }) => {
  return <Block title="Повернення" iconId="list" actions="withFilter" filter></Block>;
};
export const BlockReturnInfo = () => {
  return (
    <Block title="Деталі повернення" iconId="return" actions="primary">
      <FormPrimary formTitle="Деталі повернення" />
    </Block>
  );
};
export const BlockReturnInspection = () => {
  return (
    <Block title="Інспекція" iconId="inspect" actions="primary">
      <FormPrimary formTitle="Інспекція повернення" />
    </Block>
  );
};
