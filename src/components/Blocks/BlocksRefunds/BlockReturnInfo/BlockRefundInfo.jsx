import React from 'react';
import Block from 'components/Block/Block';
import FormPrimary from 'components/Forms/FormPrimary/FormPrimary';

const BlockRefundInfo = () => {
  return (
    <Block title="Деталі повернення" iconId="refund" actions="primary" style={{ gridColumn: '1/5', gridRow: '5/11' }}>
      <FormPrimary formTitle="Деталі повернення" />
    </Block>
  );
};

export default BlockRefundInfo;
