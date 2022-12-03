import React from 'react';
import Block from 'components/Block/Block';
import FormPrimary from 'components/Forms/FormPrimary/FormPrimary';
export const BlockReturnsList = ({ tableTitles }) => {
  return <Block title="Повернення" iconId="list" actions="withFilter" filterstyle={{ gridColumn: '1/11', gridRow: '1/5' }}></Block>;
};
export const BlockReturnInfo = () => {
  return (
    <Block title="Деталі повернення" iconId="return" actions="primary" style={{ gridColumn: '1/5', gridRow: '5/11' }}>
      <FormPrimary formTitle="Деталі повернення" />
    </Block>
  );
};
export const BlockReturnInspection = () => {
  return (
    <Block title="Інспекція" iconId="inspect" actions="primary" style={{ gridColumn: '5/11', gridRow: '5/11' }}>
      <FormPrimary formTitle="Інспекція повернення" />
    </Block>
  );
};
