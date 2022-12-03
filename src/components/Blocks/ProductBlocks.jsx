import React from 'react';
import Block from 'components/Block/Block';
import FormProductInfo from 'components/Forms/ProductForms/FormProductInfo/FormProductInfo';
import FormProductImgs from 'components/Forms/ProductForms/FormProductImgs/FormProductImgs';
import FormProductStock from 'components/Forms/ProductForms/FormProductStock/FormProductStock';
export const BlockProductsList = () => {
  return <Block title="Список товарів" iconId="list" actions="withFilter" filter style={{ gridColumn: '1/11', gridRow: '1/5' }} />;
};
export const BlockProductInfo = () => {
  return (
    <Block title="Деталі" iconId="info" actions="primary" style={{ gridColumn: '1/5', gridRow: '5/11' }}>
      <FormProductInfo />
      <FormProductImgs />
    </Block>
  );
};
export const BlockProductStock = () => {
  return (
    <Block title="Склад" iconId="storage" actions="primary" style={{ gridColumn: '5/11', gridRow: '5/11' }}>
      <FormProductStock />
    </Block>
  );
};
