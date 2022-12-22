import React from 'react';
import Block from 'components/Block/Block';

const BlockRefundsList = () => {
  return <Block title="Список повернень" iconId="list" actions="withFilter" filter style={{ gridColumn: '1/11', gridRow: '1/5' }}></Block>;
};

export default BlockRefundsList;
