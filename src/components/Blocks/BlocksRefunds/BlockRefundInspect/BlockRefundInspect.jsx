import React from 'react';
import Block from 'components/Block/Block';
import FormPrimary from 'components/Forms/FormPrimary/FormPrimary';

const BlockRefundInspect = () => {
  return (
    <Block title="Інспекція" iconId="inspect" actions="primary" style={{ gridColumn: '5/11', gridRow: '5/11' }}>
      <FormPrimary formTitle="Інспекція повернення" />
    </Block>
  );
};

export default BlockRefundInspect;
